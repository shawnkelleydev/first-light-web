import { KEY_VALUES } from 'utils/constants/bible'

import Button from './Button'
import Keypad from './Keypad'

import styles from './styles.module.css'

export default function BibleMenu({ book, chapter, books, loading, onSelect }) {
  const chapters = books
    .find(bk => bk.id === book)
    ?.chapters.filter(chapter =>
      parseInt(chapter.id.replace(`${chapter.bookId}.`, ''))
    )

  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
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
