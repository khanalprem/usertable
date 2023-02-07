import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Data from "../Data";
import ServiceCard from "../ServiceCard";

const Home = () => {
  const ServiceData =  Data.filter((item) => item.name === "services")[0].serviceItems;
  console.log(ServiceData)
  return (
    <>
      <div className="hero is-flex is-center is-align-center dir-column text-center">
        <div className="container">
          <div className="hero-content clr-white">
            <h5 className="fw-600 ">HELLO! THIS IS danhpe</h5>
            <h1 className="mt-32 mb-32">
              We bring rapid solutions for your business.
            </h1>
            <div className="buttons">
              <Link
                to="./signin"
                className="btn btn-secondary  is-flex is-align-center col-gap-8 fw-500"
              >
                <FiMessageSquare />
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="about">
        <div className="container">
          <div className="title text-center mb-40">
            <div className="title-content title-content_max">
              <h5 className="clr-secondary">About us</h5>
              <h2>
                It has <span className="clr-primary">successfully</span> worked
                on more than 300 projects{" "}
              </h2>
            </div>
          </div>
          <div className="about-content text-center">
            <p className="mb-32">
              The company was established in 2014 with a mission to address
              contemporary problems in developing countries through
              technological innovations, particularly in digital and spatial
              technology.
            </p>
            <p>
              Since its establishment, it has successfully worked on more than
              300 projects of varying scales with national and local
              governments, UN agencies, private sectors, and CSOs in and outside
              of Nepal. It has more than seven years of experience in developing
              technological solutions and delivering high-quality services that
              apply to disaster risk reduction, infrastructure development,
              health, education, and good governance.
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="title  mb-40">
            <div className="title-content ">
              <h5 className="clr-secondary">services</h5>
              <h2>
                we work on <span className="clr-primary">ideas</span> ideas
                that can provide simple
                <span className="clr-primary">solutions</span> to
                <span className="clr-primary"> complex problems</span>.
              </h2>
            </div>
          </div>
          <div className="services-wrap">
            {ServiceData.map((item,index) => {
              return(
                <ServiceCard key={index} id={item.id} title={item.title} description={item.description} icon={item.icon}/>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
