import { useEffect } from 'react'
import { Interweave } from 'interweave'

import { useAppContext } from 'context'
import { getNextVerse } from 'utils/bible'

import styles from './styles.module.css'

export default function Verse() {
  const {
    dispatch,
    state: { bible },
  } = useAppContext()

  useEffect(() => {
    if (!bible.verse) {
      console.log('FIRE VERSE EFFECT')
      getNextVerse(dispatch)
    }
  }, [bible.verse, dispatch])

  console.log('VERSE BIBE.VERSE', bible)

  if (!bible.verse) return null

  return (
    <div className={styles.verse}>
      <div>
        <button onClick={() => getNextVerse(dispatch)}>get next verse</button>
        <button onClick={() => console.log('read chapter')}>
          read chapter
        </button>
      </div>
      <Interweave content={bible.verse.content} />
      <cite>{bible.verse.reference}</cite>
    </div>
  )
}
