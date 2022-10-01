import { Interweave } from 'interweave'

import styles from './styles.module.css'

export default function BibleReader({ text }) {
  return (
    <div className={styles.reader}>
      <article>
        <h3>{text.reference}</h3>
        <Interweave content={text.content} />
      </article>
    </div>
  )
}
