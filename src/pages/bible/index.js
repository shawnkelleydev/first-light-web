import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import AppPage from 'components/AppPage'
import BibleMenu from 'components/BibleMenu'
import BibleReader from 'components/BibleReader'
import BibleHeader from 'components/BibleHeader'

import { useAppContext } from 'context'

export default function Bible() {
  const { dispatch, state } = useAppContext()
  const { input, passage } = state.bible

  const onClick = (key, value) => {
    dispatch({ type: 'SET_BIBLE_INPUT', key, value })

    switch (key) {
      case BIBLE_STATE_KEYS.book:
        dispatch({
          type: 'SET_BIBLE_INPUT',
          key: BIBLE_STATE_KEYS.chapter,
        })
        break
      case BIBLE_STATE_KEYS.chapter:
        dispatch({
          type: 'SET_BIBLE_DATA',
          key: BIBLE_STATE_KEYS.passage,
        })
        break
    }
  }

  return (
    <AppPage>
      <BibleHeader
        input={input}
        onClick={onClick}
      />
      <BibleMenu
        input={input}
        onClick={onClick}
      />
      <BibleReader passage={passage} />
    </AppPage>
  )
}
