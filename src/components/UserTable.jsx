import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useAppContext } from "../context/store";
import Modal from "./constant/Modal";

const UserTable = () => {
  const { userData } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  // const handleEdit = (userData) => {
  //   onEdit(userData);
  //   setOpenModal(!openModal);
  // };
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone </th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item?.avatar} />
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.address}</td>
                  <td>
                    <div className="is-flex is-end is-align-center col-gap-12">
                      <div
                        className="is-square is-square_sm is-square_icon is-square_circcle"
                        // onClick={() => {
                        //   setModalItem(item);
                        //   toggleModal();
                        // }}
                        onClick={toggleModal}
                      >
                        <FiEdit />
                      </div>
                      <div className="is-square is-square_sm is-square_icon is-square_circcle">
                        <FiTrash2 />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal toggleModal={toggleModal} openModal={openModal}>

      </Modal>
    </>
  );
};

export default UserTable;
