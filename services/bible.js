const headers = { 'api-key': process.env.NEXT_PUBLIC_API_BIBLE_KEY }

export const getPassage = async passage => {
  const url = `https://api.scripture.api.bible/v1/bibles/a761ca71e0b3ddcf-01/passages/${passage}?content-type=html`

  let response = await fetch(url, { headers }).catch(error =>
    console.error(error)
  )
  const { data } = await response.json()

  return data
}

export const getChapter = async chapter => {
  const url = `https://api.scripture.api.bible/v1/bibles/a761ca71e0b3ddcf-01/chapters/${chapter}?content-type=html&include-notes=true&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`

  const response = await fetch(url, { headers }).catch(error =>
    console.error(error)
  )
  const { data } = await response.json()

  return data
}
