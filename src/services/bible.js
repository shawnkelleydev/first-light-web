export const getBibleData = async (query, abortController) => {
  const { signal } = abortController

  const url = `https://api.esv.org/v3/passage/html/?q=${query}`
  const headers = { Authorization: process.env.NEXT_PUBLIC_ESV_API_KEY }

  const response = await fetch(url, { headers }, { signal }).then(res =>
    res.json()
  )

  return response
}
