import React from 'react'

import styles from './styles.module.css'

export default function Button({
  disabled,
  onClick,
  selected,
  stateKey,
  value,
}) {
  return (
    <li className={styles.button}>
      <button
        data-selected={selected}
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
