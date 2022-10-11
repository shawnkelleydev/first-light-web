import Auth from './Auth'

import { STATE_KEYS } from 'utils/constants/global'
import { useAppContext } from 'context'

export default function AppAuth({ children }) {
  const { dispatch, state } = useAppContext()
  const { authorized, blocked, input } = state.auth

  const handleSubmit = e => {
    e.preventDefault()
    console.log(input)
  }

  if (authorized) return children
  return (
    <Auth
      blocked={blocked}
      error={state.error}
      input={input}
      onChange={e => {
        dispatch({
          type: 'SET_AUTH',
          key: STATE_KEYS.input,
          value: e.target.value,
        })
      }}
      onSubmit={handleSubmit}
    />
  )
}
