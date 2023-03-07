import React, { useState } from "react";
import CreateUserForm from "../CreateUserForm";
import UserTable from "../UserTable";


const Users = () => {
  return (
    <>
      <div className="mt-64 pt-64">
        <CreateUserForm />
      </div>
      <div className="mt-40">
        <UserTable/>
      </div>
    </>
  );
};

export default Users;
