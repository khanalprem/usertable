import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FiMessageSquare,FiMenu ,FiX} from "react-icons/fi";
import Logo from '../../assets/images/danphe-logo.png';
import Data from '../ProductData'

const Header = () => {
  const [sticky , setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const MenuData = Data.filter((item) => item.name === "menu")[0].menuItems;
  
  const toggleClass = (name) => setActive(name);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      setSticky(window.scrollY > 100);
    })
  },[])
  
  return (
    <header className={`site-header ${sticky ? 'is-sticky' : ''} ${menuOpen ? 'menu-active' : ''}` } >
        <div className='container'>
            <div className='is-flex is-between is-align-center site-header_wrap'>
                <Link to='/' className="site-logo">
                  <img src={Logo} alt="site logo"/>
                </Link>
                <nav>
                    <ul className='is-flex is-center is-align-center fw-500 is-uppercase'>
                        {MenuData.map((item) =>{
                          return(
                            <li key={item.id} onClick = {() => toggleClass(item.name)} className={active === item.name ? "is-active" : ""} >
                              <Link to={item.to}>{item.name}</Link>
                            </li>
                          )
                        })}
                        
                    </ul>
                  <div className="menu-toggle menu-toggle_open" onClick={() => toggleMenu()}>
                      <FiX size={28} />
                  </div>
                </nav>
                <div className='is-flex is-end is-align-center col-gap-12'>
                    <Link to='/contact' className='btn btn-primary  is-flex is-align-center col-gap-8 fw-500'>
                      <FiMessageSquare/>
                      <span>Let's Talk</span>
                    </Link>
                    <div className="menu-toggle" onClick={() => toggleMenu()}>
                        {!menuOpen ? <FiMenu size={28}/> : <FiX size={28}/>}
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header