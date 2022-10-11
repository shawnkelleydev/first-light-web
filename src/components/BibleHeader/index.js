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
          onClick={() => onClick(BIBLE_STATE_KEYS.book)}
        >
          {book || 'book'}
        </button>
        <button
          aria-details='select a chapter'
          onClick={() => onClick(BIBLE_STATE_KEYS.chapter)}
        >
          {chapter || 'chapter'}
        </button>
      </div>
    </header>
  )
}
