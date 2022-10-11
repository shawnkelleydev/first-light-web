import React from 'react'

import useScrollDirection from 'hooks/useScrollDirection'
import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function BibleHeader({ input, onClick }) {
  const { book, chapter } = input
  const isScrollDown = useScrollDirection()

  return (
    <header
      className={styles.header}
      data-scroll-down={isScrollDown}
    >
      <h2>Bible</h2>
      <div>
        <button
          aria-details='select a book'
          disabled={!book}
          onClick={() => onClick(BIBLE_STATE_KEYS.book)}
        >
          {book}
        </button>
        <button
          aria-details='select a chapter'
          disabled={!chapter || !book}
          onClick={() => onClick(BIBLE_STATE_KEYS.chapter)}
        >
          {chapter}
        </button>
      </div>
    </header>
  )
}
