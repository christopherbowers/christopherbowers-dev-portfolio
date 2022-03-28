import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { projects } from '@data/data'
import { srConfig as config } from '@config'
import { IconGitHub, IconExternal } from '@components/icons'
import styled from 'styled-components'


export default function Projects() {

const revealTitle = useRef(null)
const revealProjects = useRef([])


useEffect(() => {
  async function animate() {
    if (revealTitle.current) {
      const sr = (await import("scrollreveal")).default
      sr().reveal(revealTitle.current, config(0, 0.25))
      revealProjects.current.forEach((ref, i) => sr().reveal(ref, config(i * 100)))
    }
  }
  animate()

}, [])


  return (
    <section id="projects">
    <h4 className="section-heading" ref={revealTitle}>Projects</h4>

    {projects.map(({title, imgUrl, externalUrl, github, tech, description}, i) => {
      return (
        <ProjectWrapper key={i} ref={el => (revealProjects.current[i] = el)}>
          <h5>
            <a href={externalUrl}>{title}</a>
          </h5>

          <ImageWrapper>
            <Image src={imgUrl} alt={title} width={1920} height={1080} layout="responsive" objectFit="contain"/>
          </ImageWrapper>

          <ul className="tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

          <p>{description}</p>

          <ProjectLinks>
            <li>
              <a href={externalUrl} target="_blank" rel="noreferrer">
                <IconExternal />
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <IconGitHub />
              </a>
            </li>
          </ProjectLinks>

        </ProjectWrapper>
      )
    })}
  </section>

  )
}


const ProjectWrapper = styled.div`

  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: center;
  margin: 0 auto 40px;

  h5 {
    font-size: clamp(20px, 6vw, 30px);
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0 10px 5px 10px;
  }

a {
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  transition: .3s;
}

a:hover {
  color: gray;
}

.tech-list {
  margin: 20px 0;
  font-family: monospace;
}
  position: relative;
`

const ProjectLinks = styled.ul`
  margin: 20px 0;

  .bi {
    height: 1.5rem;
    transition: .3s;
  }

  .bi:hover {
    color: rgb(1, 112, 243);
    // transform: scale(1.1);
`

const ImageWrapper = styled.div`


  width: clamp(50px, 65%, 900px);

  span {
    padding-top: 0;
  }
`

