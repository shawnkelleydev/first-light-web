import 'normalize.css'
import 'styles/globals.css'

import AppAuth from 'components/AppAuth'

function MyApp({ Component, pageProps }) {
  return (
    <AppAuth>
      <Component {...pageProps} />
    </AppAuth>
  )
}

export default MyApp
