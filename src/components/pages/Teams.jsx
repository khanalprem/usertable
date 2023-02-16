import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/store";
import Modal from "../constant/Modal";

const Teams = () => {
  const { data } = useAppContext()
  const teamsData = data?.filter((member) => member?.name === "teams")[0]
    ?.teamsMember || [];
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="hero is-flex is-center  dir-column ">
        <div className="container">
          <div className="hero-content hero-content_page clr-white">
            <h5 className="fw-600 ">
              <span className="line-shape pb-12 line-shape_left">meet the team</span>
            </h5>
            <h1 className="mt-32 mb-32 fs-h2">
              Meet our team of <span className="italic">creators</span>,{" "}
              <span className="italic">designers</span> and world-class{" "}
              <span className="italic">problem solvers</span>.
            </h1>
            <p className="fw-400">
              Our team is made up of <span className="italic"> creatives</span>{" "}
              with technical knowledge, strategits who think outside of box, and
              developers who push <span className="italic"> innovations</span>.
            </p>
          </div>
        </div>
      </div>
      <section className="teams">
        <div className="container">
          <div className="teams-wrap">
            {teamsData.map((item, index) => {
              return (
                <div
                  className=" teams-card radius-8 pd-24 pointer"
                  key={index}
                  id={item.id}
                  onClick={() => {
                    setModalItem(item);
                    toggleModal();
                  }}
                >
                  <figure className="teams-figure">
                    <img src={item.image} alt={item.name} />
                  </figure>
                  <div className="teams-content text-center mt-16">
                    <p className="teams-name is-capitalize fw-600">
                      {item.name}
                    </p>
                    <span className="teams-post fs-md">{item.post}</span>
                    <div className="is-flex is-center is-align-center col-gap-12">
                      {item.socialIcons.map((social, index) => {
                        return (
                          <MemeberSocials iconsList={social} key={index} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Modal
        // title={modalItem.name}
        toggleModal={toggleModal}
        openModal={openModal}
        modalSize="modal-cntr_sm"

      >
        <div className="teams-card">
          <figure className="teams-figure">
            <img src={modalItem.image} alt={modalItem.name} />
          </figure>
          <div className="teams-content text-center mt-16">
            <p className="teams-name is-capitalize fw-600">{modalItem.name}</p>
            <span className="teams-post fs-md">{modalItem.post}</span>
            <p className="description mt-8">{modalItem.description}</p>
            <div className="is-flex is-center is-align-center col-gap-12 mt-12">
              {modalItem?.socialIcons?.map((social, index) => {
                return <MemeberSocials iconsList={social} key={index} />;
              })}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
const MemeberSocials = ({ iconsList }) => {
  return (
    <a
      id={iconsList.id}
      href={iconsList.url}
      target="_blank"
      className="is-square is-square_circle is-square_icon is-square_xs social-icon"
    >
      {iconsList.icon}
    </a>
  );
};

export default Teams;
