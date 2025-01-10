import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </>
  )
}
