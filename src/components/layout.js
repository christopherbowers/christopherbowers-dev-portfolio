import { HeadMeta, Nav, Footer } from '@components/.'
import GlobalStyle from '@styles/GlobalStyle'

export default function Layout({ children }) {
  return (
    <>
    <HeadMeta />
    <GlobalStyle />
    <Nav />
      { children }
    <Footer />
    </>
  )
}
