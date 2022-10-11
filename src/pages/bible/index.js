import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import AppPage from 'components/AppPage'
import BibleMenu from 'components/BibleMenu'
import BibleReader from 'components/BibleReader'
import BibleHeader from 'components/BibleHeader'

import { useAppContext } from 'context'

export default function Bible() {
  const { dispatch, state } = useAppContext()
  const { input, passage } = state.bible

  const onMenuClick = (key, value) => {
    dispatch({ type: 'SET_BIBLE_INPUT', key, value })

    switch (key) {
      case BIBLE_STATE_KEYS.book:
        dispatch({
          type: 'SET_BIBLE_INPUT',
          key: BIBLE_STATE_KEYS.chapter,
          value: null,
        })
      case BIBLE_STATE_KEYS.chapter:
        dispatch({
          type: 'SET_BIBLE_DATA',
          key: BIBLE_STATE_KEYS.passage,
          value: null,
        })
    }
  }

  return (
    <AppPage>
      <BibleHeader
        input={input}
        onClick={key => dispatch({ type: 'SET_BIBLE_INPUT', key })}
      />
      <BibleMenu
        input={input}
        onClick={onMenuClick}
      />
      <BibleReader passage={passage} />
    </AppPage>
  )
}
