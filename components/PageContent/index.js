import styles from './styles.module.css'

export default function PageContent({ backgroundImage, children }) {
  return (
    <main
      className={styles['page-content']}
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
