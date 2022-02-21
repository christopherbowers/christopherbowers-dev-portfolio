import { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@config'
import styled from 'styled-components'

export default function Navbar() {

  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive);
  }


  return (
    <Header>
      <div className="site-header__wrapper">
      <span></span>
      <nav className="nav">
      <button className="nav__toggle" aria-expanded="false" type="button" onClick={handleToggle}>
        <svg viewBox="0 0 100 80" width="32" height="32">
          <rect width="100" height="5"></rect>
          <rect y="25" width="100" height="5"></rect>
          <rect y="50" width="100" height="5"></rect>
        </svg>
      </button>
      <ul className={isActive ? "nav__wrapper active" : "nav__wrapper"}>
        {navLinks.map(({url, name}, i) => (
          <li key={i} className="nav__item">
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
        <li className="nav__item">
        <a href="https://github.com/christopherbowers">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        </li>
        </ul>
        </nav>
      </div>
    </Header>
  )
}


const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: hsl(0, 0%, 0%, .75);
  backdrop-filter: blur(10px);
  z-index: 11;

  ul { list-style-type: none;}

  .site-header__wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 600px) {
    .site-header__wrapper {
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media (min-width: 600px) {
    .nav__wrapper {
      display: flex;
    }
  }

  @media (max-width: 599px) {
    .nav__wrapper {
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      top: 0;
      z-index: -1;
      background: hsl(0, 0%, 0%, .9);
      visibility: hidden;
      opacity: 0;
      transform: translateY(-100%);
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    }

    .nav__wrapper.active {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav__item {
  padding: 1.5rem 1rem;
  }

  .nav__item a {
    display: block;
    text-decoration: none;
    color: white;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .nav__item a:hover {
    border-bottom: 2px solid white;
  }

  .nav__toggle {
    display: none;
    background: transparent;
    border: none;
    fill: white;
  }

  @media (max-width: 599px) {
    .nav__toggle {
      display: block;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }

`
