import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { projects } from '@data/data'
import { srConfig as config } from '@config'
import styled from 'styled-components'


export default function Projects() {

const revealTitle = useRef(null)
const revealProjects = useRef([])


useEffect(() => {
  async function animate() {
    if (revealTitle.current) {
      const sr = (await import("scrollreveal")).default
      sr().reveal(revealTitle.current, config(0, 0.25))
      // sr().reveal(revealProjects.current, config(500, 0.25))
      revealProjects.current.forEach((ref, i) => sr().reveal(ref, config(i * 100)))
    }
  }
  animate()

}, [])


  return (
    <div id="projects">
    <h4 className="section-heading" ref={revealTitle}>Projects</h4>

    {projects.map((project, i) => {
      return (
        <ProjectWrapper key={i} ref={el => (revealProjects.current[i] = el)}>

          <p>{project.title}</p>
            <ImageWrapper>
            <Image src={project.imgUrl} alt={project.title} width="100%" height="100%" layout="responsive" objectFit="scale-down"/>
            </ImageWrapper>

          <ul>
            {project.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

        </ProjectWrapper>
      )
    })}

  </div>

  )
}


const ProjectWrapper = styled.section`
  // display: flex;
`
const ImageWrapper = styled.div`

`
