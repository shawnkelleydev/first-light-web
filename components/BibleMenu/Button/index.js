import React from 'react'

import styles from './styles.module.css'

export default function Button({ disabled, onClick, stateKey, value }) {
  return (
    <li className={styles.button}>
      <button
        data-key={stateKey}
        data-value={value}
        disabled={disabled}
        onClick={onClick}
      >
        {value}
      </button>
    </li>
  )
}
