import { useReducer } from 'react'
import { authenticate } from 'services/auth'

export default function useAuthData() {
  const initialState = {
    error: '',
    input: '',
    isAuthorized: true,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return { ...state, input: action.input }
      case 'AUTHORIZE':
        return { ...initialState, isAuthorized: true }
      case 'SET_ERROR':
        return { ...initialState, error: action.error }
      default:
        return { ...initialState, error: 'Oops...Something went wrong.' }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = async e => {
    e.preventDefault()

    if (state.input.length > 0) {
      const status = await authenticate(state.input)

      if (status === 200) dispatch({ type: 'AUTHORIZE' })
      else dispatch({ type: 'SET_ERROR', error: 'Wrong code.' })
    } else dispatch({ type: 'SET_ERROR', error: 'Please provide input.' })
  }

  return [dispatch, handleSubmit, state]
}
