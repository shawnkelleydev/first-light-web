import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import { authenticate } from 'services/auth'

export default function useAuthData() {
  const router = useRouter()
  console.log(router)

  const initialState = {
    attempts: 0,
    blocked: false,
    error: '',
    input: '',
    isAuthorized: false,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_INPUT':
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
        localStorage.removeItem('blockEpoc')
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
    const blockEpoc = localStorage.getItem('blockEpoc')
    const now = Date.now()

    const difference = blockEpoc ? (now - blockEpoc) / 60000 : null
    const minutesRemaining = !!difference
      ? Math.ceil(limit - difference)
      : limit

    switch (true) {
      case state.blocked && !blockEpoc:
        localStorage.setItem('blockEpoc', Date.now())
        dispatch({ type: 'BLOCK', minutesRemaining })
        break
      case !!blockEpoc && difference > limit:
        dispatch({ type: 'UNBLOCK' })
        break
      case !!blockEpoc:
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
      case !!state.error.length && state.attempts > 5:
        dispatch({ type: 'BLOCK' })
        break
      case !!state.error.length && state.attempts > 3:
        dispatch({ type: 'SET_ERROR', error: 'Prepare to be blocked...' })
        break
      case !state.input.length:
        dispatch({ type: 'SET_ERROR', error: 'Please provide input' })
        break
      case status === 200:
        dispatch({ type: 'AUTHORIZE' })
        break
      default:
        dispatch({ type: 'SET_ERROR', error: 'Wrong code.' })
        break
    }
  }

  return [dispatch, handleSubmit, state]
}
