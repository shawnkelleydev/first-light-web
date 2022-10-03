import { useEffect, useReducer } from 'react'

import { getBibleData } from 'services/bible'

import {
  BIBLE_IDS,
  BIBLE_QUERY_TYPES,
  BIBLE_STATE_KEYS,
} from 'utils/constants/bible'

export default function useReaderData() {
  const setBible = async (bibles, bibleId) => {
    dispatch({ key: BIBLE_STATE_KEYS.loading, value: true })

    dispatch({ parentKey: BIBLE_STATE_KEYS.input, key: BIBLE_STATE_KEYS.book })
    dispatch({
      parentKey: BIBLE_STATE_KEYS.input,
      key: BIBLE_STATE_KEYS.chapter,
    })

    const bible = bibles.find(bib => bib.id === bibleId)
    const books = await getBibleData(BIBLE_QUERY_TYPES.books, bibleId)
    bible.books = books

    dispatch({
      parentKey: BIBLE_STATE_KEYS.input,
      key: BIBLE_STATE_KEYS.bible,
      value: bible,
    })

    dispatch({ key: BIBLE_STATE_KEYS.loading, value: false })
  }

  const setBook = (bible, bookId) => {
    const book = bible.books.find(book => book.id === bookId)

    dispatch({
      parentKey: BIBLE_STATE_KEYS.input,
      key: BIBLE_STATE_KEYS.chapter,
    })

    dispatch({
      parentKey: BIBLE_STATE_KEYS.input,
      key: BIBLE_STATE_KEYS.book,
      value: book,
    })
  }

  const initialState = {
    api: {},
    input: { methods: { setBible, setBook } },
    loading: false,
  }

  const reducer = (state, action) => {
    let { key, parentKey, value } = action

    switch (true) {
      case !!parentKey && !!value:
        return { ...state, [parentKey]: { ...state[parentKey], [key]: value } }
      case !!parentKey && !value:
        return { ...state, [parentKey]: { ...state[parentKey], [key]: null } }
      default:
        return { ...state, [key]: value }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getBibles = async () => {
      const bibles = await getBibleData(BIBLE_QUERY_TYPES.bibles)
      dispatch({
        key: BIBLE_STATE_KEYS.bibles,
        parentKey: BIBLE_STATE_KEYS.api,
        value: bibles,
      })

      // set default Bible in state
      const bible = bibles.find(bible => bible.id === BIBLE_IDS.nasb)

      const books = await getBibleData(BIBLE_QUERY_TYPES.books, bible.id)
      bible.books = books

      dispatch({
        parentKey: BIBLE_STATE_KEYS.input,
        key: BIBLE_STATE_KEYS.bible,
        value: bible,
      })
    }

    getBibles()
  }, [])

  const { bible, book, chapter } = state.input

  useEffect(() => {
    const setPassageData = async reference => {
      dispatch({ key: BIBLE_STATE_KEYS.loading, value: true })
      const passageData = await getBibleData(
        BIBLE_QUERY_TYPES.chapter,
        bible.id,
        reference
      )

      dispatch({
        parentKey: BIBLE_STATE_KEYS.api,
        key: BIBLE_STATE_KEYS.passageData,
        value: passageData,
      })
      dispatch({ key: BIBLE_STATE_KEYS.loading, value: false })
    }

    bible && book && chapter && setPassageData(chapter.id)
  }, [bible, book, chapter])

  return [dispatch, state]
}
