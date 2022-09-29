import { Interweave } from 'interweave'

import styles from './styles.module.css'

import BibleMenu from 'components/BibleMenu'

import useReaderData from './useReaderData'

export default function BibleReader() {
  const [books, dispatch, state] = useReaderData()
  const { book, chapter, loading, text } = state

  return (
    <div className={styles.reader}>
      <BibleMenu
        book={book}
        books={books}
        chapter={chapter}
        loading={loading}
        onSelect={event =>
          dispatch({
            key: event.target.getAttribute('data-key'),
            value: event.target.getAttribute('data-value'),
          })
        }
      />
      <h3>Reader</h3>
      {text && (
        <article>
          <h3>{text.reference}</h3>
          <Interweave content={text.content} />
        </article>
      )}
    </div>
  )
}
