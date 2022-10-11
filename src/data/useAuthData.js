import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import { authenticate } from 'services/auth'

export default function useAuthData() {
  const router = useRouter()

  const initialState = {
    attempts: 0,
    blocked: false,
    error: '',
    input: '',
    isAuthorized: true,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_BIBLE_INPUT':
        return { ...state, input: action.input }
      case 'AUTHORIZE':
        return { ...initialState, isAuthorized: true }
      case 'SET_ERROR':
        return {
          ...state,
          attempts: state.attempts + 1,
          error: action.error,
          input: '',
        }
      case 'BLOCK':
        return {
          ...state,
          blocked: true,
          error: `You have been blocked.  Please try again in ${action.minutesRemaining} minutes.`,
        }
      case 'UNBLOCK':
        localStorage.removeItem('blockStartEpoc')
        return {
          ...state,
          blocked: false,
          error: '',
        }
      default:
        return { ...initialState, error: 'Oops...Something went wrong.' }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (!state.isAuthorized && router.asPath !== '/') router.push('/')
  }, [router, state.isAuthorized])

  useEffect(() => {
    const limit = 5
    const blockStartEpoc = localStorage.getItem('blockStartEpoc')
    const now = Date.now()

    const difference = blockStartEpoc ? (now - blockStartEpoc) / 60000 : null
    const minutesRemaining = !!difference
      ? Math.ceil(limit - difference)
      : limit

    switch (true) {
      case state.blocked && !blockStartEpoc:
        localStorage.setItem('blockStartEpoc', Date.now())
        dispatch({ type: 'BLOCK', minutesRemaining })
        break
      case !!blockStartEpoc && difference > limit:
        dispatch({ type: 'UNBLOCK' })
        break
      case !!blockStartEpoc:
        dispatch({ type: 'BLOCK', minutesRemaining })
        break
    }
  }, [state.blocked])

  const handleSubmit = async e => {
    e.preventDefault()
    let status = null

    if (!!state.input.length && !state.blocked) {
      status = await authenticate(state.input)
    }

    switch (true) {
      case status === 200:
        dispatch({ type: 'AUTHORIZE' })
        break
      case !!state.error.length && state.attempts > 5:
        dispatch({ type: 'BLOCK' })
        break
      case !!state.error.length && state.attempts > 3:
        dispatch({ type: 'SET_ERROR', error: 'Prepare to be blocked...' })
        break
      case !state.input.length:
        dispatch({ type: 'SET_ERROR', error: 'Please provide input' })
        break
      default:
        dispatch({ type: 'SET_ERROR', error: 'Wrong code.' })
        break
    }
  }

  return [dispatch, handleSubmit, state]
}
