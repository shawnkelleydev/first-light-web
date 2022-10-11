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

  const books = [Object.keys(data[0]), Object.keys(data[1])]
  const chapters = getChapters(data[0][book]?.length || data[1][book]?.length)

  if (book && chapter) return null

  return (
    <div className={styles.menu}>
      <div>
        <h3>{getHeaderText()}</h3>
        {!book &&
          books.map((testament, idx) => (
            <Keypad
              idCB={item => item.replace(' ', '').slice(0, 3).toUpperCase()}
              key={idx}
              list={testament}
              onClick={item => onClick(BIBLE_STATE_KEYS.book, item)}
            />
          ))}
        {book && !chapter && (
          <Keypad
            idCB={item => item}
            list={chapters}
            onClick={item => onClick(BIBLE_STATE_KEYS.chapter, item)}
          />
        )}
      </div>
    </div>
  )
}
