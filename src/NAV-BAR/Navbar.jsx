import Contact from './Contact'
import Bag from './Bag'
import Profile from './Profile'
import SearchBar from './SearchBar'
import MenuHam from './MenuHam'
import Logo from './logo'
import './Navbar.css'


function Navbar() {
  return (
    <div>
    <nav className='navbar'>
      <div className="logo">
        <Logo/>
      </div>
      <div className="SearchBar">
       <SearchBar/>
      </div>
      <div className="menu-hamburger">
        <MenuHam/>
      </div>
      <div className="nav">
        <Contact/>
        <Bag/>
        <Profile/>
      </div>
    </nav>
    <div className="linha"></div>
    </div>


  )
  
  }



export default Navbar
