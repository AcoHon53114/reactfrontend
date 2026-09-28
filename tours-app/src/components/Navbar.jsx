import logo from '../assets/T.png'

// short hand: rafce 

const Navbar = () => {
  return (
       <nav className="navbar">
    <div className="container navbar-flex">
        <img src={logo} alt="logo" className="logo"/>

{/* main menu  */}
<div className="main-menu">
<ul className="main-menu-list">
    <li><a href="#home">home</a></li>
    <li><a href="#about">about</a></li>
    <li><a href="#services">services</a></li>
    <li><a href="#tours">tours</a></li>
</ul>
<ul className="nav-icons">

{/* add social media links inside href  */}
    <li><a href="#" className="nav-icon"><i className="fa-brands fa-facebook" ></i></a></li>
   <li><a href="#" className="nav-icon"><i className="fa-brands fa-threads" ></i></a></li> 
  <li><a href="#" className="nav-icon"><i className="fa-brands fa-x-twitter" ></i></a></li>
</ul>
</div>

{/* mobile menu */}
<div className="mobile-menu">
<div className="mobile-menu-toggle">
    <i className="fa-solid fa-bars"></i>
    <div className="mobile-menu-items">
        <ul className="mobile-menu-list">
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#tours">tours</a></li> 
        </ul>
    </div>
</div>
</div>
    </div>
    </nav>
  )
}

export default Navbar