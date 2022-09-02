import { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@config'
import styles from '@styles/navbar.module.scss'

export default function Navbar() {

  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive);
  }


  return (
    <div className={styles.nav}>
      <div className={styles['site-header__wrapper']}>
      <span></span>
      <nav>
        <button className={styles.nav__toggle} aria-expanded="false" type="button" onClick={handleToggle}>
          <svg viewBox="0 0 100 80" width="32" height="32">
            <rect width="100" height="5"></rect>
            <rect y="25" width="100" height="5"></rect>
            <rect y="50" width="100" height="5"></rect>
          </svg>
        </button>
        <ul className={isActive ? `${styles.nav__wrapper} ${styles.active}`  : `${styles.nav__wrapper}`}>
          {navLinks.map(({url, name}, i) => (
            <li key={i} className={styles.nav__item}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
            <li className={styles.nav__item}>
            <a href="https://github.com/christopherbowers">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <title>GitHub</title>
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)"/>
              </svg>
            </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
