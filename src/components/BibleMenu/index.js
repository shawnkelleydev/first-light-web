import { KEY_VALUES } from 'utils/constants/bible'

import Keypad from 'components/Keypad'

import styles from './styles.module.css'

const Keypads = ({ books, onSelect, state }) => {
  switch (true) {
    case !state.book:
      return (
        <Keypad
          idCB={item => item.id}
          list={books}
          loading={state.loading}
          onClick={onSelect}
          selectedId={state.book}
          stateKey={KEY_VALUES.book}
        />
      )
    default:
      return (
        <Keypad
          idCB={item => item.id.replace(`${item.bookId}.`, '')}
          list={state.chapters}
          loading={state.loading}
          onClick={onSelect}
          selectedId={state.chapter}
          stateKey={KEY_VALUES.chapter}
        />
      )
  }
}

export default function BibleMenu({ book, books, chapter, onSelect, state }) {
  const headerText = !book
    ? KEY_VALUES.book
    : !chapter
    ? KEY_VALUES.chapter
    : null

  if (book && chapter) return null

  return (
    <div className={styles.menu}>
      <h3>{headerText}</h3>
      <Keypads
        books={books}
        onSelect={onSelect}
        state={state}
      />
    </div>
  )
}
