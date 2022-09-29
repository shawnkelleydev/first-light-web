import { KEY_VALUES } from 'utils/constants/bible'

import Button from './Button'

import styles from './styles.module.css'

export default function BibleMenu({ book, chapter, books, loading, onSelect }) {
  const chapters = books.find(bk => bk.id === book)?.chapters

  return (
    <div className={styles.menu}>
      <h3>Menu</h3>
      <ul className={styles.grid}>
        {books.map((bk, idx) => (
          <Button
            disabled={loading}
            key={idx}
            onClick={onSelect}
            selected={(bk.id === book).toString()}
            stateKey={KEY_VALUES.book}
            value={bk.id}
          />
        ))}
      </ul>
      <ul className={styles.grid}>
        {chapters?.map((ch, idx) => {
          const chptr = ch.id.replace(`${ch.bookId}.`, '')
          if (!parseInt(chptr)) return null

          return (
            <Button
              selected={(chptr === chapter).toString()}
              disabled={loading}
              key={idx}
              onClick={onSelect}
              stateKey={KEY_VALUES.chapter}
              value={chptr}
            />
          )
        })}
      </ul>
    </div>
  )
}
