import Link from 'next/link'
import { useRouter } from 'next/router'
import { pages } from 'utils/constants'

import styles from './styles.module.css'

export default function Nav() {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <nav className={styles.nav}>
      {pages.map((page, idx) => (
        <Link
          href={`/${page.toLowerCase()}`}
          key={idx}
        >
          <a className={page === route ? styles.active : null}>
            <span>{page}</span>
          </a>
        </Link>
      ))}
    </nav>
  )
}
