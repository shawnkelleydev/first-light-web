import { useEffect, useState } from 'react'
import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import AppPage from 'components/AppPage'
import BibleMenu from 'components/BibleMenu'
import BibleReader from 'components/BibleReader'
import BibleHeader from 'components/BibleHeader'

import { useAppContext } from 'context'

export default function Bible() {
  const [showMenu, setShowMenu] = useState(false)
  const { dispatch, state } = useAppContext()
  const { input, passage } = state.bible

  useEffect(() => {
    if (!input.book || !input.chapter) setShowMenu(true)
    else setShowMenu(false)
  }, [input])

  const onClick = (key, value) => {
    setShowMenu(true)
    dispatch({ type: 'SET_BIBLE_INPUT', key, value })

    if (key === BIBLE_STATE_KEYS.book)
      dispatch({
        type: 'SET_BIBLE_INPUT',
        key: BIBLE_STATE_KEYS.chapter,
      })
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
        setShow={setShowMenu}
        show={showMenu}
      />
      <BibleReader passage={passage} />
    </AppPage>
  )
}
