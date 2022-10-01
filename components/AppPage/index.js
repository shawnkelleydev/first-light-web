import AppFooter from 'components/AppFooter'
import AppHead from 'components/AppHead'
import AppHeader from 'components/AppHeader'
import AppContent from 'components/AppContent'

import styles from './styles.module.css'

export default function AppPage({ backgroundImage, children }) {
  return (
    <div className={styles.page}>
      <AppHead />
      <AppHeader />
      <AppContent backgroundImage={backgroundImage}>{children}</AppContent>
      <AppFooter />
    </div>
  )
}
