import { useEffect, useReducer } from 'react'

import { getChapter } from 'services/bible'

export default function useReaderData() {
  const initialState = {
    book: null,
    chapter: null,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          [action.event.target.name]: [action.event.target.value],
        }
      default:
        return { ...initialState }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return [dispatch, state]
}
