import PageWrapper from 'components/PageWrapper'
import BibleMenu from 'components/BibleMenu'
import BibleReader from 'components/BibleReader'

import useReaderData from 'data/useBibleData'

export default function Bible() {
  const [books, dispatch, state] = useReaderData()
  const { book, chapter, chapters, loading, text } = state

  return (
    <PageWrapper>
      <BibleMenu
        book={book}
        chapter={chapter}
        chapters={chapters}
        books={books}
        loading={loading}
        onSelect={e =>
          dispatch({
            key: e.target.getAttribute('data-key'),
            value: e.target.getAttribute('data-value'),
          })
        }
      />
      {text && <BibleReader text={text} />}
    </PageWrapper>
  )
}
