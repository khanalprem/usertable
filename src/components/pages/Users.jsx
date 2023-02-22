import React, { useState } from "react";
import { useAppContext } from "../../context/store";
import CreateUserForm from "../CreateUserForm";
import UserTable from "../UserTable";

const Users = () => {
  const { userData, setUserData } = useAppContext();
  const [modalItem, setModalItem] = useState({});
  
  return (
    <>
      <div className="users">
        <div className="container">
          <CreateUserForm
            modalItem={modalItem}
            userData={userData}
            setUserData={setUserData}
          />
          <UserTable
            userData={userData}
            setModalItem={setModalItem}
            modalItem={modalItem}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
