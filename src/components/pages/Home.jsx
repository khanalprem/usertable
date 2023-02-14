import React, { useLayoutEffect, useRef, useState } from "react";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioItemMap from "../PortfolioItemMap";
import ServiceCardMap from "../ServiceCardMap";
import { useAppContext } from "../../context/store";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { data } = useAppContext

  // useLayoutEffect(() => {
  //   gsap.fromTo(
  //     ".hero-content > *",
  //     {
  //       y: -150,
  //       opacity:0,
  //       scrollTrigger: {
  //         triggger: ".hero-content ",
  //         start: "start center",
  //         scrub: true,
  //       },
  //       stagger: {
  //         // wrap advanced options in an object

  //         each: 0.4,
  //         from: "center",
  //         grid: "auto",
  //         ease: "power2.inOut",
  //         repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
  //       },
  //     },
  //     {
  //       y:0,
  //       opacity:1
  //     }

  //   );

  //   const serviceCards = gsap.utils.toArray('.services-item');
  //   serviceCards.forEach((card) => {
  //     gsap.from(card,{
  //       opacity:0,
  //       x:500,
  //       stagger:0.2,
  //       scrollTrigger:{
  //         trigger:'.services',
  //         scrub:true,
  //       }
  //     })
  //   })
  // },[]);

  const ServiceData = data?.filter((item) => item?.name === "services")[0]
    ?.serviceItems || [];
  const HighlightData = data?.filter((item) => item?.name === "highlight")[0]
    ?.highlightItems || [];
  const TrustedData = data?.filter((item) => item?.name === "trusted")[0]
    ?.trustedItems || [];
  return (
    <>
      <div className="hero is-flex is-center is-align-center dir-column text-center">
        <div className="container">
          <div className="hero-content clr-white" >
            <h5 className="fw-600 " >HELLO! THIS IS danhpe</h5>
            <h1 className="mt-24 mb-40" >
              We bring rapid <span className="italic">solutions</span> for your{" "}
              <span className="line-shape italic">business</span>.
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
      <section className="services clr-bg">
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
          <ServiceCardMap />
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

          <PortfolioItemMap visible={4} showmore={false} />

          <div className="is-flex is-center mt-40">
            <Link
              to="/portfolio"
              className="btn btn-secondary   is-flex is-align-center col-gap-8 fw-500 is-uppercase"
            >
              <span>view all</span>
              <FiArrowRight />
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
            slidesPerView={2}
            breakpoints={{
              // when window width is >= 640px
              480: {
                width: 480,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 4,
              },
              1024: {
                width: 1024,
                slidesPerView: 5,
              },
            }}
          >
            {TrustedData.map((item, index) => {
              return (
                <SwiperSlide key={index} id={item.id}>
                  <div className="trusted-card">
                    <img src={item.image} alt={item.name} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

    </>
  );
};

export default Home;
