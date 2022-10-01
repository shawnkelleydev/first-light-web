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
    let { key, value } = action

    switch (key) {
      case KEY_VALUES.version:
        value = state.versions.find(version => version.abbreviation === value)
        break
      case KEY_VALUES.chapter:
        value = state.book.chapters.find(chapter =>
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

  console.log('state', state)

  useEffect(() => {
    const getVersions = async () => {
      const versions = await getBibleData(DATA_TYPES.versions)
      dispatch({ key: KEY_VALUES.versions, value: versions })
    }

    getVersions()
  }, [])

  useEffect(() => {
    if (typeof state.book === 'string') {
      const getBookData = async () => {
        console.log('%cgetBookData', 'color: lime', state.book)
        const book = await getBibleData(
          DATA_TYPES.book,
          state.book,
          state.version.id
        )
        dispatch({ key: KEY_VALUES.book, value: book })
      }

      getBookData()
    }
  }, [state.book, state.version])

  useEffect(() => {
    if (q) {
      const keys = [KEY_VALUES.book, KEY_VALUES.chapter]
      const query = {}
      q.split('.').map((item, idx) => (query[keys[idx]] = item))

      Object.keys(query).forEach(key => {
        dispatch({ key, value: query[key] })
      })

      router.replace('bible')
    }
  }, [q, router])

  useEffect(() => {
    const chapters = books
      .find(book => book.id === state.book)
      ?.chapters.filter(chapter =>
        parseInt(chapter.id.replace(`${chapter.bookId}.`, ''))
      )

    chapters && dispatch({ key: KEY_VALUES.chapters, value: chapters })
  }, [state.book])

  useEffect(() => {
    if (state.version && state.book && state.chapter) {
      const chapter = state.book.id + '.' + state.chapter.number
      const version = state.version.id

      const getData = async () => {
        dispatch({ key: KEY_VALUES.loading, value: true })
        const text = await getBibleData(DATA_TYPES.chapter, chapter, version)
        dispatch({ key: KEY_VALUES.text, value: text })
        dispatch({ key: KEY_VALUES.loading, value: false })
      }

      getData()
    }
  }, [state.book, state.chapter, state.version])

  return [books, dispatch, state]
}
