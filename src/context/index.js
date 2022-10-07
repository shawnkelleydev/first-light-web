import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const initialState = {
    error: '',
    authorization: { blocked: false, isAuthorized: false },
    bible: {
      api: {},
      input: {},
      verse: null,
    },
  }

  const [state, dispatch] = useReducer((state, action) => {
    const { parentKey, key, value } = action
    switch (true) {
      case !!parentKey:
        return { ...state, [parentKey]: { ...state.parentKey, [key]: value } }
      default:
        return { ...state, [key]: value }
    }
  }, initialState)

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
