import React from 'react'
import { Interweave } from 'interweave'

import useVerseData from './useVerseData'

import styles from './styles.module.css'

export default function Verse() {
  const [getNextVerse, state] = useVerseData()
  const { verse } = state

  console.log(state)
  if (!state.verse) return null

  return (
    <div className={styles.verse}>
      <div>
        <button onClick={getNextVerse}>get next verse</button>
        <button onClick={() => console.log('nav')}>read chapter</button>
      </div>
      <Interweave content={verse.content} />
      <cite>{verse.reference} NASB</cite>
    </div>
  )
}
