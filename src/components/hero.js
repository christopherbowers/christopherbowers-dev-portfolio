import styled from 'styled-components'

export default function Hero() {
  const one = <h1>Hi, my name is</h1>
  const two = <h2 className='big-heading'>Christopher Bowers</h2>
  const three = <h3 className='medium-heading'>I make things for the web.</h3>

  const items = [one, two, three]

  return (
    <Wrapper>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </Wrapper>
  )
}


const Wrapper = styled.section`
  padding: 100px 0;

  h1 {
    margin: 0 0 30px 4px;
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }


`
