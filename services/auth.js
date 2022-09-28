export const authenticate = async code => {
  const url = '/api/auth'
  const response = await fetch(url, { headers: { code } }).catch(error =>
    console.error(error)
  )

  return response.status
}
