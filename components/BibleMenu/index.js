import { KEY_VALUES } from 'utils/constants/bible'

import Keypad from './Keypad'

import styles from './styles.module.css'

export default function BibleMenu({
  book,
  books,
  chapter,
  chapters,
  loading,
  onSelect,
}) {
  return (
    <div className={styles.menu}>
      <Keypad
        idCB={item => item.id}
        list={books}
        loading={loading}
        onSelect={onSelect}
        selectedId={book}
        stateKey={KEY_VALUES.book}
      />
      <Keypad
        idCB={item => item.id.replace(`${item.bookId}.`, '')}
        list={chapters}
        loading={loading}
        onSelect={onSelect}
        selectedId={chapter}
        stateKey={KEY_VALUES.chapter}
      />
    </div>
  )
}
