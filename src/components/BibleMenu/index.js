import { KEY_VALUES } from 'utils/constants/bible'

import Keypad from 'components/Keypad'

import styles from './styles.module.css'

const Keypads = ({ books, onSelect, state }) => {
  const { book, chapters, loading, version, versions } = state
  switch (true) {
    case !version:
      return (
        <Keypad
          data-bibles
          idCB={item => item.abbreviation}
          list={versions}
          loading={loading}
          onClick={onSelect}
          stateKey={KEY_VALUES.version}
        />
      )
    case !book:
      return (
        <Keypad
          idCB={item => item.id}
          list={books}
          loading={loading}
          onClick={onSelect}
          stateKey={KEY_VALUES.book}
        />
      )
    default:
      return (
        <Keypad
          idCB={item => item.id.replace(`${item.bookId}.`, '')}
          list={chapters}
          loading={loading}
          onClick={onSelect}
          stateKey={KEY_VALUES.chapter}
        />
      )
  }
}

export default function BibleMenu({ books, onSelect, state }) {
  const { book, chapter, version, versions } = state

  const getHeaderText = () => {
    switch (true) {
      case !version:
        return KEY_VALUES.version
      case !book:
        return KEY_VALUES.book
      case !chapter:
        return KEY_VALUES.chapter
      default:
        return null
    }
  }

  if (version && book && chapter) return null

  return (
    <div className={styles.menu}>
      <h3>{getHeaderText()}</h3>
      <Keypads
        books={books}
        onSelect={onSelect}
        state={state}
      />
    </div>
  )
}
