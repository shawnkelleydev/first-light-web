import { useEffect } from 'react'
import { Interweave } from 'interweave'

import { BIBLE_PATTERNS, BIBLE_STATE_KEYS } from 'utils/constants/bible'
import { selectRandomVerse } from 'utils/bible'
import { getBibleData } from 'services/bible'

import { useAppContext } from 'context'

import styles from './styles.module.css'
import { useRouter } from 'next/router'

export default function Verse() {
  const { dispatch, state } = useAppContext()
  const { verse } = state.bible

  const router = useRouter()

  useEffect(() => {
    const abortController = new AbortController()

    if (!verse) {
      ;(async () => {
        let verse = selectRandomVerse()
        verse = await getBibleData(verse, abortController)

        dispatch({
          type: 'SET_BIBLE_DATA',
          key: BIBLE_STATE_KEYS.verse,
          value: verse,
        })
      })()
    }

    return () => abortController.abort()
  }, [dispatch, verse])

  const handleReadChapter = () => {
    const { canonical } = verse
    const book = canonical.match(BIBLE_PATTERNS.book)[0].trim()
    const chapter = canonical.includes(':')
      ? canonical.replace(book, '').trim().split(':')[0]
      : '1'

    console.log('handleReadChapter', book, chapter)
    dispatch({
      type: 'SET_BIBLE_INPUT',
      key: BIBLE_STATE_KEYS.book,
      value: book,
    })
    dispatch({
      type: 'SET_BIBLE_INPUT',
      key: BIBLE_STATE_KEYS.chapter,
      value: chapter,
    })
    router.push('/bible')
  }

  return (
    <div
      className={styles.verse}
      data-loading={!verse}
    >
      <div>
        <button
          disabled={!verse}
          onClick={() =>
            dispatch({
              type: 'SET_BIBLE_DATA',
              key: BIBLE_STATE_KEYS.verse,
              value: null,
            })
          }
        >
          get next verse
        </button>
        <button
          disabled={!verse}
          onClick={handleReadChapter}
        >
          read chapter
        </button>
      </div>
      {!verse && <span>Loading...</span>}
      {verse && <Interweave content={verse.passages[0]} />}
      {verse && <cite>{verse.canonical}</cite>}
    </div>
  )
}
