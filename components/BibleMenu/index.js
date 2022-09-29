import { KEY_VALUES } from 'utils/constants/bible'

import Button from './Button'

import styles from './styles.module.css'

export default function BibleMenu({ book, books, loading, onSelect }) {
  const chapters = books.find(bk => bk.id === book)?.chapters

  return (
    <div className={styles.menu}>
      <h2>Menu</h2>
      <ul className={styles.grid}>
        {books.map((book, idx) => (
          <Button
            disabled={loading}
            key={idx}
            onClick={onSelect}
            stateKey={KEY_VALUES.book}
            value={book.id}
          />
        ))}
      </ul>
      <ul className={styles.grid}>
        {chapters?.map((chapter, idx) => {
          const chptr = chapter.id.replace(`${chapter.bookId}.`, '')
          if (!parseInt(chptr)) return null

          return (
            <Button
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
