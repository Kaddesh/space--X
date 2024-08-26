
import { Link } from "react-router-dom"
import "../styles/navbar.scss"
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <section>
       <div className="navbar-class">
        <div className="img-container">
        <img src={`${import.meta.env.BASE_URL}assets/shared/logo.svg`} alt="logo" className="image"/>
        </div>
         <div className="rule"></div>
        <div className="hamburger" onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <img src={`${import.meta.env.BASE_URL}assets/shared/icon-close.svg`} alt="close" />
        ) : (
          <img src={`${import.meta.env.BASE_URL}assets/shared/icon-hamburger.svg`} alt="open" />
        )}
      </div>
      {isMenuOpen && ( 
    
     <ul className="u-listed">
    <div className="sidebar">
      <p>00</p>
      <li><Link to="/">Home</Link></li>
    </div>
    <div className="sidebar">
      <p>01</p>
      <li><Link to="/destination">Destination</Link></li>
    </div>
    <div className="sidebar">
      <p>02</p>
      <li><Link to="/crew">Crew</Link></li>
    </div>
    <div className="sidebar">
      <p>03</p>
      <li><Link to="/technology">Technology</Link></li>
    </div>
  </ul>
 )}

<nav className="nav-links">
  <ul>
    <div className="identifier">
      <p>00</p>
      <li><Link to="/">Home</Link></li>
    </div>
    <div className="identifier">
      <p>01</p>
      <li><Link to="/destination">Destination</Link></li>
    </div>
    <div className="identifier">
      <p>02</p>
      <li><Link to="/crew">Crew</Link></li>
    </div>
    <div className="identifier">
      <p>03</p>
      <li><Link to="/technology">Technology</Link></li>
    </div>
  </ul>
</nav>

       </div>
    </section>
  )
}
