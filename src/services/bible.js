import { BIBLE_QUERY_TYPES } from 'utils/constants/bible'

export const getBibleData = async (
  type,
  bible = 'a761ca71e0b3ddcf-01',
  query = null
) => {
  let url = 'https://api.scripture.api.bible/v1/'
  let headers = { 'api-key': process.env.NEXT_PUBLIC_API_BIBLE_KEY }

  switch (type) {
    case BIBLE_QUERY_TYPES.bibles:
      url += 'bibles?language=eng&include-full-details=true'
      break
    case BIBLE_QUERY_TYPES.books:
      url += `bibles/${bible}/books?include-chapters=true`
      break
    case BIBLE_QUERY_TYPES.chapter:
      url += `bibles/${bible}/chapters/${query}?content-type=text&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false`
      break
    case BIBLE_QUERY_TYPES.esv:
      url = `https://api.esv.org/v3/passage/text/?q=${query}`
      headers = { Authorization: process.env.NEXT_PUBLIC_ESV_API_KEY }
      break
  }

  const { data } = await fetch(url, { headers }).then(res => res.json())

  return data
}
