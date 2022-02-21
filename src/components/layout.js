import { Meta, Navbar, Footer } from '@components/.'
import GlobalStyle from '@styles/GlobalStyle'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <GlobalStyle />
      <Wrapper>
        <Navbar />
          { children }
        <Footer />
      </Wrapper>
    </>
  )
}
