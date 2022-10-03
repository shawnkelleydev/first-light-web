import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import Keypad from 'components/Keypad'

import styles from './styles.module.css'

const Keypads = ({
  bible,
  bibles,
  book,
  chapter,
  dispatch,
  inputMethods,
  loading,
}) => {
  const { setBible, setBook } = inputMethods

  switch (true) {
    case !bible:
      return (
        <Keypad
          data-bibles
          disabled={loading}
          idCB={item => item.abbreviationLocal}
          list={bibles}
          onClick={bible => setBible(bibles, bible.id)}
        />
      )
    case !book:
      return (
        <Keypad
          disabled={loading}
          idCB={item => item.id}
          list={bible?.books}
          onClick={book => setBook(bible, book.id)}
        />
      )
    case !chapter:
      return (
        <Keypad
          disabled={loading}
          idCB={item => item.id.replace(`${item.bookId}.`, '')}
          list={book.chapters}
          onClick={chapter =>
            dispatch({
              parentKey: BIBLE_STATE_KEYS.input,
              key: BIBLE_STATE_KEYS.chapter,
              value: chapter,
            })
          }
        />
      )
    default:
      return null
  }
}

export default function BibleMenu({ dispatch, state }) {
  const getHeaderText = () => {
    switch (true) {
      case !state.input.bible:
        return BIBLE_STATE_KEYS.bible
      case !state.input.book:
        return BIBLE_STATE_KEYS.book
      case !state.input.chapter:
        return BIBLE_STATE_KEYS.chapter
      default:
        return null
    }
  }

  return (
    <div className={styles.menu}>
      <h3>{getHeaderText()}</h3>
      <Keypads
        bible={state.input.bible}
        bibles={state.api.bibles}
        book={state.input.book}
        chapter={state.input.chapter}
        dispatch={dispatch}
        inputMethods={state.input.methods}
        loading={state.loading}
        state={state}
      />
    </div>
  )
}
