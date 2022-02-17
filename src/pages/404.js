import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>Oops...</h1>
      <p>Back to <Link href="/"><a>Home Page</a></Link></p>
    </div>
  )
}
