import { Interweave } from 'interweave'

import styles from './styles.module.css'

export default function BibleReader({ loading, passageData }) {
  if (!passageData) return null

  return (
    <div className={styles.reader}>
      {loading && <p>LOADING...</p>}
      {!loading && (
        <>
          <article>
            <h3>{passageData.reference}</h3>
            <Interweave content={passageData.content} />
          </article>
          <cite>{passageData.copyright}</cite>
        </>
      )}
    </div>
  )
}
