import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { getBibleData } from 'services/bible'
import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const initialState = {
    error: '',
    auth: {
      attempts: 0,
      authorized: true,
      blocked: false,
      input: '',
    },
    bible: {
      input: {},
      passage: null,
      query: null,
      verse: null,
    },
  }

  const [state, dispatch] = useReducer((state, action) => {
    const { type, key, value } = action
    switch (type) {
      case 'SET_AUTH':
        return { ...state, auth: { ...state.auth, [key]: value } }
      case 'SET_BIBLE_DATA':
        return {
          ...state,
          bible: { ...state.bible, [key]: value },
        }
      case 'SET_BIBLE_INPUT':
        return {
          ...state,
          bible: {
            ...state.bible,
            input: { ...state.bible.input, [key]: value },
          },
        }
      default:
        return { ...state, [key]: value }
    }
  }, initialState)

  useEffect(() => {
    const abortController = new AbortController()
    const { book, chapter } = state.bible.input

    const getPassage = async () => {
      const data = await getBibleData(`${book} ${chapter}`, abortController)
      dispatch({
        type: 'SET_BIBLE_DATA',
        key: BIBLE_STATE_KEYS.passage,
        value: data,
      })
    }

    book && chapter && getPassage()

    return () => abortController.abort()
  }, [state.bible.input])

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
