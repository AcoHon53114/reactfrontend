import logo from '../assets/T.png'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

// short hand: rafce 

const Navbar = () => {
  return (
       <nav className="navbar">
    <div className="container navbar-flex">
        <img src={logo} alt="logo" className="logo"/>

{/* main menu  */}
<div className="main-menu">
    <PageLinks groupClass="main-menu-list" />
{/* add social media links inside href  */}
<SocialLinks groupClass="nav-icons" listItemClass="nav-icon"/>
</div>

{/* mobile menu */}
<div className="mobile-menu">
<div className="mobile-menu-toggle">
    <i className="fa-solid fa-bars"></i>
    <div className="mobile-menu-items">
        <PageLinks groupClass="mobile-menu-list" />
    </div>
</div>
</div>
    </div>
    </nav>
  )
}

export default Navbar