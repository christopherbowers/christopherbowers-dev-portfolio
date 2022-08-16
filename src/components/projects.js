import Image from 'next/image'
import { projects } from '@data/data'
import { IconGitHub, IconExternal } from '@components/icons'
import styles from '@styles/projects.module.scss'

export default function Projects() {

  return (
    <section id="projects">
    <h4 className="section-heading">Projects</h4>

    {projects.map(({title, imgUrl, externalUrl, github, tech, description}, i) => {
      return (
        <div className={styles.projectWrapper} key={i}>
          <h5>
            <a href={externalUrl}>{title}</a>
          </h5>

          <div className={styles.imageWrapper}>
            <Image src={imgUrl} alt={title} width={1920} height={1080} layout="responsive" objectFit="contain"/>
          </div>

          <ul className="tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>

          <p>{description}</p>

          <div className={styles.projectLinks}>
            <a href={externalUrl} target="_blank" rel="noreferrer">
              <IconExternal />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <IconGitHub />
            </a>
          </div>
        </div>
      )
    })}
  </section>
  )
}
