import { useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import { getChapter } from 'services/bible'
import { KEY_VALUES } from 'utils/constants/bible'
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
  }

  const reducer = (state, action) => {
    const { key, value } = action

    const returnState = key === KEY_VALUES.book ? initialState : state
    return {
      ...returnState,
      [key]: value,
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

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
  }, [q])

  useEffect(() => {
    const chapters = books
      .find(book => book.id === state.book)
      ?.chapters.filter(chapter =>
        parseInt(chapter.id.replace(`${chapter.bookId}.`, ''))
      )
    chapters && dispatch({ key: KEY_VALUES.chapters, value: chapters })
  }, [state.book])

  useEffect(() => {
    if (state.book && state.chapter) {
      const chapter = state.book + '.' + state.chapter
      const getData = async () => {
        dispatch({ key: KEY_VALUES.loading, value: true })
        const text = await getChapter(chapter)
        dispatch({ key: KEY_VALUES.text, value: text })
        dispatch({ key: KEY_VALUES.loading, value: false })
      }

      getData()
    }
  }, [state.book, state.chapter])

  return [books, dispatch, state]
}
