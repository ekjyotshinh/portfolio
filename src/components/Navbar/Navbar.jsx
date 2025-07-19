import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      {
        // TODO : add somthing in the logo
      <div className="logo"></div>

      }

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
