import Logo from './Logo'
import Nav from './Nav'

import styles from './styles.module.css'

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
