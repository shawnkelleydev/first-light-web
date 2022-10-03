import { BIBLE_QUERY_TYPES } from 'utils/constants/bible'

const headers = { 'api-key': process.env.NEXT_PUBLIC_API_BIBLE_KEY }

export const getBibleData = async (
  type,
  bible = 'a761ca71e0b3ddcf-01',
  reference = null
) => {
  let url = 'https://api.scripture.api.bible/v1/'

  switch (type) {
    case BIBLE_QUERY_TYPES.bibles:
      url += 'bibles?language=eng&include-full-details=true'
      break
    case BIBLE_QUERY_TYPES.books:
      url += `bibles/${bible}/books?include-chapters=true`
      break
    case BIBLE_QUERY_TYPES.chapter:
      url += `bibles/${bible}/chapters/${reference}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`
      break
  }

  let response = await fetch(url, { headers }).catch(error =>
    console.error(error)
  )

  const { data } = await response.json()

  return data
}
