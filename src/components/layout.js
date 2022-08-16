import { Meta, Navbar, Footer } from '@components/.'
import styles from '@styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.wrapper}>
        <Navbar />
          { children }
        <Footer />
      </div>
    </>
  )
}
