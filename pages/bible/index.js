import { KEY_VALUES } from 'utils/constants/bible'

import AppPage from 'components/AppPage'
import BibleMenu from 'components/BibleMenu'
import Keypad from 'components/Keypad'
import BibleReader from 'components/BibleReader'

import useBibleData from 'data/useBibleData'
import BibleHeader from 'components/BibleHeader'

const Keypads = ({ books, onSelect, state }) => {
  switch (true) {
    case !state.book:
      return (
        <Keypad
          idCB={item => item.id}
          list={books}
          loading={state.loading}
          onClick={onSelect}
          selectedId={state.book}
          stateKey={KEY_VALUES.book}
        />
      )
    default:
      return (
        <Keypad
          idCB={item => item.id.replace(`${item.bookId}.`, '')}
          list={state.chapters}
          loading={state.loading}
          onClick={onSelect}
          selectedId={state.chapter}
          stateKey={KEY_VALUES.chapter}
        />
      )
  }
}

export default function Bible() {
  const [books, dispatch, state] = useBibleData()
  const { book, chapter, text } = state

  const onSelect = e =>
    dispatch({
      key: e.target.getAttribute('data-key'),
      value: e.target.getAttribute('data-value'),
    })

  return (
    <AppPage>
      <BibleHeader
        onClick={e => {
          dispatch({ key: KEY_VALUES.text, value: null })
          onSelect(e)
        }}
        state={state}
      />
      <BibleMenu
        book={book}
        chapter={chapter}
      >
        <Keypads
          books={books}
          onSelect={onSelect}
          state={state}
        />
      </BibleMenu>
      <BibleReader text={text} />
    </AppPage>
  )
}
