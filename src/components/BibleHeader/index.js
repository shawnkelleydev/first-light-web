import React from 'react'

import { KEY_VALUES } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function BibleHeader({ onClick, state }) {
  return (
    <header className={styles.header}>
      <h2>Bible</h2>
      <div>
        <button
          data-key={KEY_VALUES.book}
          data-value={null}
          disabled={!state.book}
          onClick={onClick}
        >
          {state.book}
        </button>
        <button
          data-key={KEY_VALUES.chapter}
          data-value={null}
          disabled={!state.chapter}
          onClick={onClick}
        >
          {state.chapter}
        </button>
      </div>
    </header>
  )
}
