import Auth from './Auth'

import useAuthData from './useAuthData'

export default function AuthWrapper({ children }) {
  const [dispatch, handleSubmit, state] = useAuthData()
  const { blocked, error, input, isAuthorized } = state

  if (isAuthorized) return children

  return (
    <Auth
      blocked={blocked}
      error={error}
      input={input}
      onChange={e => dispatch({ type: 'SET_INPUT', input: e.target.value })}
      onSubmit={handleSubmit}
    />
  )
}
