import { useEffect, useReducer } from 'react'

import verses from 'utils/constants/data/verses.json'

export default function useVerseData() {
  const intialState = {
    verse: null,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_VERSE':
        return { ...state, verse: action.verse }
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState)

  useEffect(() => {
    if (!state.verse) {
      const verse = verses[Math.floor(Math.random() * (verses.length + 1))]
      dispatch({
        type: 'SET_VERSE',
        verse,
      })
    }
  }, [state.verse])

  const getNextVerse = () => {
    const n = Math.floor(Math.random() * (verses.length + 1))
    dispatch({
      type: 'SET_VERSE',
      verse: verses[n],
    })
  }

  return [getNextVerse, state]
}
