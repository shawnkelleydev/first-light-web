import React from 'react'

import { KEY_VALUES } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function BibleHeader({ books, onClick, state }) {
  const { book, chapter, version } = state
  const bookTitle = books.find(book => book.id === book?.abbreviation)?.name

  console.log('%cBibleHeader state:', 'color: aqua', state)

  return (
    <header className={styles.header}>
      <h2>
        <button
          aria-details={`select a bible version`}
          data-key={KEY_VALUES.version}
          data-value={null}
          onClick={onClick}
        >
          Bible
        </button>
      </h2>
      <div>
        <button
          aria-details={`select a Bible version`}
          data-key={KEY_VALUES.version}
          data-value={null}
          disabled={!version}
          onClick={onClick}
        >
          {version?.abbreviation}
        </button>
        <button
          aria-details={`select a book from the ${version?.name} Bible`}
          data-key={KEY_VALUES.book}
          data-value={null}
          disabled={!book}
          onClick={onClick}
        >
          {book?.abbreviation}
        </button>
        <button
          aria-details={`select a chapter from ${bookTitle}`}
          data-key={KEY_VALUES.chapter}
          data-value={null}
          disabled={!chapter}
          onClick={onClick}
        >
          {chapter?.number}
        </button>
      </div>
    </header>
  )
}
