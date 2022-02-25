import styled from 'styled-components'

export default function Footer() {
  return (
    <Wrapper>
      <p>Designed &amp; Built by Christopher Bowers</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  padding: 20px 0;
  font-size: .8em;
`
