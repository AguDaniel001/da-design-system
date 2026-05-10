
import './App.css'
import { Link } from '@tanstack/react-router'

function App() {


  return (
    <>
      <section id="center">
        <h1>Da Design System</h1>
        <p>Design system for building data-centric applications.</p>
        <Link to="/buttons" className="primary-btn">
          View components
        </Link>
      </section>
    </>
  )
}

export default App
