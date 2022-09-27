import Link from 'next/link'
import { meta } from 'utils/constants'

import styles from './styles.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <h1>
        <Link href='/'>
          <a>
            {meta.TITLE.split(' ').map((word, idx) => (
              <span key={idx}>{word}</span>
            ))}
          </a>
        </Link>
      </h1>
    </div>
  )
}
