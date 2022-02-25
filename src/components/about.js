import { useEffect, useRef } from 'react'
import { name } from '@data/data'
import Image from 'next/image'
import { srConfig as config } from '@config'

export default function About() {

const revealTitle = useRef(null)
const revealProjects = useRef([])


useEffect(() => {
  async function animate() {
    if (revealProjects.current) {
      const sr = (await import("scrollreveal")).default
      sr().reveal(revealTitle.current, config())
      // sr().reveal(revealAbout.current, config())
    }
  }
  animate()

}, [])


  return (
    <div id="about">
      <h4 className="section-heading" ref={revealTitle}>About</h4>
    </div>

  )
}
