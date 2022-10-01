import { KEY_VALUES } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function BibleMenu({ children, book, chapter }) {
  const headerText = !book
    ? KEY_VALUES.book
    : !chapter
    ? KEY_VALUES.chapter
    : null

  if (book && chapter) return null

  return (
    <div className={styles.menu}>
      <h3>{headerText}</h3>
      {children}
    </div>
  )
}
