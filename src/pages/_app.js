import 'normalize.css'
import 'styles/globals.css'

import AppAuth from 'components/AppAuth'
import { AppContextProvider } from 'context'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <AppAuth>
        <Component {...pageProps} />
      </AppAuth>
    </AppContextProvider>
  )
}

export default MyApp
