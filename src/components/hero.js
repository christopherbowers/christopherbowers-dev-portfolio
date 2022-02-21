import styled from 'styled-components'

export default function Hero() {
  const one = <h1>Hi, my name is</h1>
  const two = <h2 className='big-heading'>Christopher Bowers</h2>
  const three = <h3 className='medium-heading'>I make things for the web.</h3>
  // const four = (
  //   <>
  //     <p>
  //       I'm a full stack software engineer with a background in design and photography. Motivated by a strong curiosity and determined desire to learn. With a combination of art and technical backgrounds I make teams better by mixing creativity with strategic problem solving.
  //     </p>
  //   </>
  // )

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
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }


`
