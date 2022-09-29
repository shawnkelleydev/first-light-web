// throws async errors with aliasing
import { META } from 'utils/constants/meta'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <ul className={styles.ul}>
      <li>
        Copyright © {META.CURRENT_YEAR} {META.AUTHOR}.
      </li>
      <li>All rights reserved.</li>
    </ul>
  )
}
