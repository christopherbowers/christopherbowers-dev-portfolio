import { Hero, Projects, Contact } from '@components/.'
import styled from 'styled-components'

export default function IndexPage() {

  return (
    <Wrapper>
      <Hero />
      <Projects />
      <Contact />
    </Wrapper>
  )
}

const Wrapper = styled.main`

`
