import Link from 'next/link'
import { navLinks } from '@config'

export default function Nav() {

  return (
    <>
      {navLinks.map(({url, name}, i) => (
        <Link key={i} href={url}>
          <a>{name}</a>
        </Link>
      ))}
    </>
  )
}
