// import { BIBLE_STATE_KEYS } from 'utils/constants/bible'

import AppPage from 'components/AppPage'
import BibleMenu from 'components/BibleMenu'
import BibleReader from 'components/BibleReader'

import useBibleData from 'data/useBibleData'
import BibleHeader from 'components/BibleHeader'

export default function Bible() {
  const [dispatch, state] = useBibleData()
  console.log('STATE', state)

  return (
    <AppPage>
      <BibleHeader
        dispatch={dispatch}
        state={state}
      />
      <BibleMenu
        dispatch={dispatch}
        state={state}
      />
      <BibleReader
        loading={state.loading}
        passageData={state.api.passageData}
      />
    </AppPage>
  )
}
