import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import { getBibleData } from 'services/bible'

import {
  KEY_VALUES,
  DEFAULT_BIBLE_VERSION,
  DATA_TYPES,
} from 'utils/constants/bible'
import books from 'utils/constants/data/api-books'

export default function useReaderData() {
  const router = useRouter()
  const { q } = router.query

  const initialState = {
    book: null,
    chapter: null,
    chapters: null,
    loading: false,
    text: null,
    version: DEFAULT_BIBLE_VERSION,
    versions: null,
  }

  const reducer = (state, action) => {
    const { book, versions } = state
    let { key, value } = action

    switch (key) {
      case KEY_VALUES.version:
        value = versions?.find(version => version.abbreviationLocal === value)
        break
      case KEY_VALUES.chapter:
        if (!value) break
        value = book.chapters.find(chapter =>
          chapter.id.includes(value.toString())
        )
        break
      case KEY_VALUES.book:
        return { ...state, [key]: value, chapter: null }
      default:
        break
    }

    return {
      ...state,
      [key]: value,
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const { book, chapter, version } = state

  useEffect(() => {
    const getVersions = async () => {
      const ignoreAbbreviations = ['WEB', 'WEBBE', 'WEBUS']
      let versions = await getBibleData(DATA_TYPES.versions)
      versions = versions.filter(
        version => !ignoreAbbreviations.includes(version.abbreviationLocal)
      )
      dispatch({ key: KEY_VALUES.versions, value: versions })
    }

    getVersions()
  }, [])

  useEffect(() => {
    if (typeof book === 'string') {
      const getBookData = async () => {
        const bk = await getBibleData(DATA_TYPES.book, book, version.id)
        dispatch({ key: KEY_VALUES.book, value: bk })
      }

      getBookData()
    }
  }, [book, version])

  useEffect(() => {
    if (q) {
      console.log(q)
      const keys = [KEY_VALUES.book, KEY_VALUES.chapter]
      const query = {}
      q.split('.').map((item, idx) => (query[keys[idx]] = item))

      query.book = books.find(book => book.id === query.book)

      dispatch({ key: KEY_VALUES.book, value: query.book })
      dispatch({ key: KEY_VALUES.chapter, value: query.chapter })

      router.replace('bible')
    }
  }, [q, router])

  useEffect(() => {
    const chapters = books
      .find(bk => bk.id === book)
      ?.chapters.filter(chapter =>
        parseInt(chapter.id.replace(`${chapter.bookId}.`, ''))
      )

    chapters && dispatch({ key: KEY_VALUES.chapters, value: chapters })
  }, [book])

  useEffect(() => {
    if (version && book && chapter) {
      const chptr = book.id + '.' + chapter.number
      const vers = version.id

      const getData = async () => {
        dispatch({ key: KEY_VALUES.loading, value: true })
        const text = await getBibleData(DATA_TYPES.chapter, chptr, vers)
        dispatch({ key: KEY_VALUES.text, value: text })
        dispatch({ key: KEY_VALUES.loading, value: false })
      }

      getData()
    }
  }, [book, chapter, version])

  console.log(state)

  return [books, dispatch, state]
}
