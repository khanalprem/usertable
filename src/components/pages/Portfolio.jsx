import React, { useState } from "react";
import PortfolioItemMap from "../PortfolioItemMap";

const Portfolio = () => {
  const [visible, setVisible] = useState(4);

  const showmoreButton = () => {
    setVisible((p) => p + 4);
  };


  

  return (
    <>
      <div className="hero is-flex is-center  dir-column ">
        <div className="container">
          <div className="hero-content hero-content_page clr-white">
            <h5 className="fw-600 ">
              <span className="line-shape pb-12 line-shape_left">
                key highlights
              </span>
            </h5>
            <h1 className="mt-32 mb-32 fs-h2 ">
              Our team has developed data{" "}
              <span className="italic">initiatives </span>and{" "}
              <span className="italic">digital </span> solutions.
            </h1>
            <p className="fw-500">
              Smooth <span className="italic">Business </span> starts with good
              service <span className="italic">consultation</span>.
            </p>
          </div>
        </div>
      </div>
      <section className="highlight">
        <div className="container">
          <div className="title  mb-40">
            <div className="title-content ">
              <h5 className="clr-secondary">
                <span className="line-shape line-shape_left">Portfolios</span>
              </h5>
            </div>
          </div>
              <PortfolioItemMap
                  visible={visible} showmoreButton={showmoreButton} showmore={true}/>
        </div>
      </section>
      
    </>
  );
};

export default Portfolio;
