import Link from 'next/link'
import { useRouter } from 'next/router'

import { PAGES } from 'utils/constants/meta'

import useScrollDirection from 'hooks/useScrollDirection'

import styles from './styles.module.css'

export default function Nav() {
  let { route } = useRouter()
  route = route.replace('/', '')

  const isScrollDown = useScrollDirection()

  return (
    <nav
      className={styles.nav}
      data-scroll-down={isScrollDown}
    >
      {Object.keys(PAGES).map((page, idx) => (
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
