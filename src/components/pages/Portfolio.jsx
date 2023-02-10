import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Modal from "../constant/Modal";
import Data from "../Data";
import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  const [visible, setVisible] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  
  const HighlightData = Data.filter((item) => item.name === "highlight")[0]
    .highlightItems;
  const highlightLength = HighlightData.length;

  const showmoreButton = () => {
    setVisible((p) => p + 4);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
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
          <div className="highlight-wrap gap-24 pt-24">
            {HighlightData.slice(0, visible).map((item, index) => {
              return (
                <PortfolioCard
                  onClick={() => {
                    setModalItem(item);
                    toggleModal();
                  }}
                  
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
            {highlightLength >= visible ? (
              <button
                onClick={() => showmoreButton()}
                className="btn btn-secondary   is-flex is-align-center col-gap-8 fw-500 is-uppercase"
              >
                <span>view more</span>
                <FiArrowRight />
              </button>
            ) : null}
          </div>
        </div>
      </section>
      <Modal
        toggleModal={toggleModal}
        openModal={openModal}
        modalSize="modal-cntr_lg"
      >
        <div className="highlight-item_content">
          <h4 className="mb-16">{modalItem.title}</h4>
          <p>{modalItem.description}</p>
          <div className='highlight-item_client mt-16'>
            <div className='client'>
              <span className="fs-md is-uppercase fw-600">Client</span>
              <p className="is-capitalize fw-600 clr-primary">{modalItem.client}</p>
            </div>
            <div className='duration'>
              <span className="fs-md is-uppercase fw-600">Time Duration</span>
              <div className='is-flex is-align-center is-start col-gap-12 fs-md'>
                <time>{modalItem.startDate} </time>
                <span>-</span>
                <time>{modalItem.endDate}</time>
              </div>
            </div>
          </div>
      </div>
      </Modal>
    </>
  );
};

export default Portfolio;
