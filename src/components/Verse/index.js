import React from 'react'
import { useRouter } from 'next/router'
import { Interweave } from 'interweave'

import { PAGES } from 'utils/constants/meta'
import { BIBLE_VERSIONS } from 'utils/constants/bible'
import useVerseData from './useVerseData'

import styles from './styles.module.css'

export default function Verse() {
  const router = useRouter()
  const [getNextVerse, state] = useVerseData()
  const { verse } = state

  if (!state.verse) return null

  return (
    <div className={styles.verse}>
      <div>
        <button onClick={getNextVerse}>get next verse</button>
        <button
          onClick={() =>
            router.push(`/${PAGES.bible}?q=${verse.chapterIds[0]}`, 'bible')
          }
        >
          read chapter
        </button>
      </div>
      <Interweave content={verse.content} />
      <cite>
        {verse.reference} {BIBLE_VERSIONS.NASB}
      </cite>
    </div>
  )
}
