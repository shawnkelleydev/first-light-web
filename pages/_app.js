import PageWrapper from 'components/PageWrapper'

import 'normalize.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  )
}

export default MyApp
