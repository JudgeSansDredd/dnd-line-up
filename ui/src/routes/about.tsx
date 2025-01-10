import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <div className="p-2">Hello from About!</div>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </>
  )
}
