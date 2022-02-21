import { useEffect, useRef } from 'react'
import { projects } from '@data/data'
import Image from 'next/image'
import { srConfig as config } from '@config'

export default function Projects() {

const revealTitle = useRef(null)
const revealProjects = useRef([])


useEffect(() => {
  async function animate() {
    if (revealProjects.current) {
      const sr = (await import("scrollreveal")).default
      sr().reveal(revealTitle.current, config())
      sr().reveal(revealProjects.current, config())
    }
  }
  animate()

}, [])


  return (
    <div id="projects">
    <h4 ref={revealTitle}>Projects</h4>

    {projects.map((project, i) => {
      return (
        <div key={i} ref={el => (revealProjects.current[i] = el)}>

          <p>{project.title}</p>

          <div>
            <Image src={project.imgUrl} alt={project.title} width="100%" height="100%" layout="responsive" objectFit="contain" />
          </div>

          <ul>
            {project.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

        </div>
      )
    })}

  </div>

  )
}
