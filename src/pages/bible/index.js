import { KEY_VALUES } from 'utils/constants/bible'

import AppPage from 'components/AppPage'
import BibleMenu from 'components/BibleMenu'
import BibleReader from 'components/BibleReader'

import useBibleData from 'data/useBibleData'
import BibleHeader from 'components/BibleHeader'

export default function Bible() {
  const [books, dispatch, state, versions] = useBibleData()
  const { book, chapter, text } = state

  const onSelect = e =>
    dispatch({
      key: e.target.getAttribute('data-key'),
      value: e.target.getAttribute('data-value'),
    })

  const onClick = e => {
    dispatch({ key: KEY_VALUES.text, value: null })
    onSelect(e)
  }

  return (
    <AppPage>
      <BibleHeader
        books={books}
        onClick={onClick}
        state={state}
        versions={versions}
      />
      <BibleMenu
        book={book}
        books={books}
        chapter={chapter}
        onSelect={onSelect}
        state={state}
        versions={versions}
      />
      <BibleReader text={text} />
    </AppPage>
  )
}
