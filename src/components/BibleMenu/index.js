import { BIBLE_STATE_KEYS } from 'utils/constants/bible'
import data from 'utils/data/bible.json'

import Keypad from 'components/Keypad'

import styles from './styles.module.css'

export default function BibleMenu({ input, onClick }) {
  const { book, chapter } = input
  console.log('BIBLE MENU:', book, chapter)

  const getChapters = chapters => {
    const formattedList = []
    for (let n = 1; n <= chapters; n++) {
      formattedList.push(n)
    }
    return formattedList
  }

  const getHeaderText = () => {
    switch (true) {
      case !book:
        return BIBLE_STATE_KEYS.book
      case !chapter:
        return BIBLE_STATE_KEYS.chapter
      default:
        return null
    }
  }

  const books = Object.keys(data)
  const chapters = getChapters(data[book]?.length)

  if (book && chapter) return null

  return (
    <div className={styles.menu}>
      <div>
        <h3>{getHeaderText()}</h3>
        <Keypad
          list={!book ? books : chapters}
          onClick={item =>
            onClick(
              !book ? BIBLE_STATE_KEYS.book : BIBLE_STATE_KEYS.chapter,
              item
            )
          }
          idCB={item =>
            isNaN(item) ? item.replace(' ', '').slice(0, 3).toUpperCase() : item
          }
        />
      </div>
    </div>
  )
}
