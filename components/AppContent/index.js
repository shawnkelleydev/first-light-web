import styles from './styles.module.css'

export default function AppContent({ backgroundImage, children }) {
  return (
    <main
      className={styles.content}
      style={
        backgroundImage
          ? { '--background-image': `url(${backgroundImage.url})` }
          : null
      }
    >
      {children}
    </main>
  )
}
