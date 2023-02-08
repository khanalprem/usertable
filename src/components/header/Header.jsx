import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FiMessageSquare } from "react-icons/fi";
import Logo from '../../assets/images/danphe-logo.png';
import Data from '../Data'

const Header = () => {
  const [active, setActive] = useState('home');
  const MenuData = Data.filter((item) => item.name === "menu")[0].menuItems;
  
  const toggleClass = (name) => {
    setActive(name);
  }
  
  return (
    <header className='site-header'>
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
                </nav>
                <div className='is-flex is-end is-align-center col-gap-12'>
                    <Link to='/contact' className='btn btn-primary  is-flex is-align-center col-gap-8 fw-500'>
                      <FiMessageSquare/>
                      <span>Let's Talk</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header