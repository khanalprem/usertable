import React,{ useEffect } from "react";
import { FiMessageSquare,FiArrowRight } from "react-icons/fi";
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "../Data";
import PortfolioCard from "../PortfolioCard";
import ServiceCard from "../ServiceCard";


const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() =>{
    gsap.from(".hero h5", {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        triggger: '.hero',
        start: '100 200',
        end: '800 200',
        toggleActions: 'play reverse restart none',
      }
    })
    gsap.from(".hero h1", {
      y: -150,
      opacity: 0,
      delay: 0.3,
      scrollTrigger: {
        triggger: '.hero',
        start: '100 200',
        end: '900 200',
        toggleActions: 'play reverse restart none',
      }
    })
    gsap.fromTo(".hero .btn", {y: -100},
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        scrollTrigger: {
          triggger: '.hero',
          start: '100 200',
          end: '1000 200',
          // markers: true,
          toggleActions: 'play reverse restart none',
        }
      }
    )
    // const serviceCards = gsap.utils.toArray('.services-item')
    // serviceCards.forEach((card, i )=> {
    //   gsap.from(card, {
    //     opacity: 0,
    //     x: 500,
    //     scrollTrigger: {
    //       trigger: '.services-wrap',
    //       start: 'top 70%',
    //       end: 'bottom 20%',
    //       scrub: true,
    //     }
    //   })
    // });
    // gsap.from('.highlight-item', {
    //   y: 300,
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: '.highlight',
    //     start: 'top 70%',
    //     end: 'bottom bottom',
    //     scrub: true,
    //     pinSpacing: false,
    //     // markers: true,
    //   },
    // })
  },[]);

  const ServiceData = Data.filter((item) => item.name === "services")[0]
    .serviceItems;
  const HighlightData = Data.filter((item) => item.name === "highlight")[0]
    .highlightItems;
    const TrustedData = Data.filter((item) => item.name === "trusted")[0]
    .trustedItems;
  return (
    <>
      <div className="hero is-flex is-center is-align-center dir-column text-center">
        <div className="container">
          <div className="hero-content clr-white">
            <h5 className="fw-600 ">HELLO! THIS IS danhpe</h5>
            <h1 className="mt-32 mb-32">
              We bring rapid solutions for your{" "}
              <span className="line-shape">business</span>.
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
              <h5 className="clr-secondary ">
                <span className="line-shape">About us</span>
              </h5>
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
              <h5 className="clr-secondary">
                <span className="line-shape line-shape_left">services</span>
              </h5>
              <h2>
                we work on <span className="clr-primary">ideas </span>
                that can provide simple
                <span className="clr-primary"> solutions</span> to
                <span className="clr-primary"> complex problems</span>.
              </h2>
            </div>
          </div>
          <div className="services-wrap gap-24 pt-24">
            {ServiceData.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="highlight">
        <div className="container">
          <div className="title  mb-40">
            <div className="title-content ">
              <h5 className="clr-secondary">
                <span className="line-shape line-shape_left">Portfolios</span>
              </h5>
              <h2>
                Our team has developed data{" "}
                <span className="clr-primary">initiatives </span>and{" "}
                <span className="clr-primary">digital </span> solutions.
              </h2>
            </div>
          </div>
          <div className="highlight-wrap gap-24 pt-24">
            {HighlightData.slice(0,4).map((item, index) =>{
              return (
                <PortfolioCard
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  client={item.client}
                  startDate={item.startDate}
                  endDate={item.endDate}
                />
              );
            })}
          </div>
          <div className="is-flex is-center mt-40">
          <Link to='/services' className='btn btn-secondary   is-flex is-align-center col-gap-8 fw-500 is-uppercase'>
            
            <span>view all</span>
            <FiArrowRight/>
          </Link>
          </div>
        </div>
      </section>
      <div className="trusted">
        <div className="container">
        <div className="title text-center mb-40">
            <div className="title-content title-content_max">
              <h5 className="clr-secondary ">
                <span className="line-shape">Our Partners</span>
              </h5>
            </div>
          </div>
          <Swiper 
            spaceBetween={50}
            slidesPerView={5}
          >
            {TrustedData.map((item) =>{
              return(
                <SwiperSlide>
                  <div className="trusted-card">
                      <img src={item.image} alt={item.name}/>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
