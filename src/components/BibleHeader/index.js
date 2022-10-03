import React from 'react'

import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function BibleHeader({ dispatch, state }) {
  const { bible, book, chapter } = state.input

  return (
    <header className={styles.header}>
      <h2>
        <button
          aria-details={
            bible
              ? `Select a Bible.  You're currently using the ${bible.name}.`
              : 'Select a Bible.'
          }
          onClick={() =>
            dispatch({
              parentKey: BIBLE_STATE_KEYS.input,
              key: BIBLE_STATE_KEYS.bible,
            })
          }
        >
          Bible
        </button>
      </h2>
      <div>
        <button
          aria-details={`Select a Bible.  You're currently using the ${bible?.name}.`}
          disabled={!bible}
          onClick={() =>
            dispatch({
              parentKey: BIBLE_STATE_KEYS.input,
              key: BIBLE_STATE_KEYS.bible,
            })
          }
        >
          {bible?.abbreviationLocal}
        </button>
        <button
          aria-details={`select a book from the ${bible?.name}`}
          disabled={!book || !bible}
          onClick={() =>
            dispatch({
              parentKey: BIBLE_STATE_KEYS.input,
              key: BIBLE_STATE_KEYS.book,
            })
          }
        >
          {book?.id}
        </button>
        <button
          aria-details={`select a chapter from ${'[book]'}`}
          disabled={!chapter || !book || !bible}
          onClick={() =>
            dispatch({
              parentKey: BIBLE_STATE_KEYS.input,
              key: BIBLE_STATE_KEYS.chapter,
            })
          }
        >
          {chapter?.number}
        </button>
      </div>
    </header>
  )
}
