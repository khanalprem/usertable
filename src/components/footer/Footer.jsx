import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FiArrowUp} from 'react-icons/fi'
import Logo from "../../assets/images/danphe-logo.png";
import Data from "../Data";
const Footer = () => {
  const [showButton, setShowButton]= useState();
  const newDate = new Date().getFullYear();
  const serviceLink = Data.filter((item) => item.name === "services")[0]
    .serviceItems;
    const comapnyLink = Data.filter((item) => item.name === "footer")[0]
    .companyMenus;
    const socialLink = Data.filter((item) => item.name === "socialIcons")[0]
    .socialIcons;
  const handleScrollTop = () => {
    window.scrollTo({top:0,behavior:'smooth'});
  }
    useEffect(() =>{
      const scrollButton = () =>{
        window.pageYOffset > 200 ? setShowButton(true) : setShowButton(false);
      };
      window.addEventListener('scroll', scrollButton);
      return() => {
        window.removeEventListener('scroll',scrollButton);
      }
    },[]);
  return (
    <footer className="site-footer ">
      <div className="container">
        <div className="site-footer_wrap">
          <div className="address">
            <figure className="">
              <img src={Logo} alt="site logo" />
            </figure>
            <div className="address-content mt-16">
              <p className="mb-4">
                Tanka Prasad Ghumti Sadak, Anamnagar, Kathmandu
              </p>
              <p className="mb-4">+9779851182852</p>
              <Link to="mailto:info@danpheit.com">info@danpheit.com</Link>
            </div>
          </div>
          <div className="services-col ">
            <div className="fw-600 is-uppercase fs-md mb-4 mt-40">Services</div>
            <ul className="link-list">
              
              {serviceLink.map((item, index) => {
                return(
                  <li key={index} id={item.id}>
                  <Link to='/'>{item.title}</Link>
                </li>
                )
              })}
            </ul>
          </div>
          <div className="company-col">
          <div className="fw-600 is-uppercase fs-md mb-4 mt-40">Company</div>
            <ul className="link-list">
            {comapnyLink.map((item, index) => {
                return(
                  <li key={index} id={item.id}>
                  <Link to={item.to}>{item.name}</Link>
                </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="copyright is-flex is-between is-align-center fs-md pt-16 mt-40">
          <p>© Danphe <span>{newDate}</span>. All Rights Reserved.</p>
          <div className="is-flex is-end is-align-center col-gap-12">
          {socialLink.map((item,index) => {
                return(
                  <Link key={index} id={item.id} to={item.url} target="_blank" className="is-square is-square_circle is-square_icon is-square_xs">{item.icon}</Link>
                )
              })}
          </div>
        </div>
      </div>
      {showButton && (
        <button className="is-square is-square_circle is-square_sm scroll-top" onClick={() => handleScrollTop()}><FiArrowUp/></button>
      ) }
    </footer>

  );
};

export default Footer;
