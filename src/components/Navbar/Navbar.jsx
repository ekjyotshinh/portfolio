import './Navbar.css'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
