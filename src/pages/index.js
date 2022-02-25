import { Hero, About, Projects, Contact } from '@components/.'
import styled from 'styled-components'

export default function IndexPage() {

  return (
    <Wrapper>
      <Hero />
{/*       <About /> */}
      <Projects />
      <Contact />
    </Wrapper>
  )
}

const Wrapper = styled.main`

`
