import styles from './styles.module.css'

import useReaderData from './useReaderData'

export default function BibleReader() {
  const data = useReaderData()
  console.log('useReaderData:', data)

  return (
    <div className={styles.reader}>
      <h3>BibleReader</h3>
      <article>{data?.verse}</article>
    </div>
  )
}
