import { Interweave } from 'interweave'
import { ESV_COPYRIGHT } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function BibleReader({ passage }) {
  console.log('PASSAGE', passage)
  return (
    <section
      className={styles.reader}
      data-passage={passage}
    >
      <article>
        <h3>{passage?.reference || passage?.canonical}</h3>
        <Interweave content={passage?.content || passage?.passages[0]} />
      </article>
      <cite>
        {ESV_COPYRIGHT.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </cite>
    </section>
  )
}
