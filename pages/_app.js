import 'normalize.css'
import 'styles/globals.css'

import AuthWrapper from 'components/AuthWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  )
}

export default MyApp
