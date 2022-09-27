import Footer from 'components/Footer'
import Head from 'components/Head'
import Header from 'components/Header'
import PageContent from 'components/PageContent'

import styles from './styles.module.css'

export default function PageWrapper({ backgroundImage, children }) {
  return (
    <div className={styles['page-wrapper']}>
      <Head />
      <Header />
      <PageContent backgroundImage={backgroundImage}>{children}</PageContent>
      <Footer />
    </div>
  )
}
