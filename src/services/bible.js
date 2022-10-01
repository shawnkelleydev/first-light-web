import { DATA_TYPES } from 'utils/constants/bible'

const headers = { 'api-key': process.env.NEXT_PUBLIC_API_BIBLE_KEY }

export const getBibleData = async (
  type,
  reference = null,
  version = 'a761ca71e0b3ddcf-01'
) => {
  let url = 'https://api.scripture.api.bible/v1/'

  switch (type) {
    case DATA_TYPES.versions:
      url += 'bibles?language=eng&include-full-details=true'
      break
    case DATA_TYPES.book:
      console.log('%cfire data book', 'color: red')
      url += `bibles/${version}/books/${reference}?include-chapters=true`
      break
    case DATA_TYPES.chapter:
      url += `bibles/${version}/chapters/${reference}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`
      break
    case DATA_TYPES.passage:
      url += `https://api.scripture.api.bible/v1/bibles/${version}/passages/${reference}?content-type=html`
      break
  }

  let response = await fetch(url, { headers }).catch(error =>
    console.error(error)
  )

  const { data } = await response.json()

  return data
}
