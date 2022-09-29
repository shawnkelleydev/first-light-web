import { useEffect, useReducer } from 'react'

import { getChapter } from 'services/bible'
import { KEY_VALUES } from 'utils/constants/bible'
import books from 'utils/constants/data/api-books'

export default function useReaderData() {
  const initialState = {
    book: null,
    chapter: null,
    loading: false,
    text: null,
  }

  const reducer = (state, action) => {
    const { key, value } = action
    switch (true) {
      default:
        const returnState = key === KEY_VALUES.book ? initialState : state
        return {
          ...returnState,
          [key]: value,
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (!!state.book && !!state.chapter) {
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
