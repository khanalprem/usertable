import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/store";
import Modal from "./constant/Modal";

const CreateUserForm = () => {
  const { userData, setUserData } = useAppContext();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    avatar: [],
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    avatar: [],
  });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, avatar } = formData;
    var temp = { ...error };

    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        temp = { ...temp, [key]: `${key} is empty` };
      }
      setError({ ...temp });
    });
    if (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      subject !== "" &&
      avatar !== ""
    ) {
      setSuccess("Form has been successfully submitted");
    }
    setUserData([...userData, formData]);
  };

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (formData[name] !== "") {
      setError({ ...error, [name]: "" });
    }
  };

  const errorText = (value) => {
    return <>{value && <span className="fs-md mt-4 is-error">{value}</span>}</>;
  };

  return (
    <div className="mt-64 pt-64">
      <form className="users-form mt-64" onSubmit={handleSubmit}>
        {success && <h4 className="is-success">{success}</h4>}
        <div className="users-form_wrap mt-24">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              onChange={onChange}
            />
            {errorText(error.name)}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={onChange}
            />
            {errorText(error.name)}
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={onChange}
            />
            {errorText(error.name)}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="address"
              onChange={onChange}
            />
            {errorText(error.name)}
          </div>
          <div className="form-group">
            <input
              type="file"
              name="avatar"
              value={formData.avatar}
              onChange={onChange}
            />
            {errorText(error.name)}
          </div>
        </div>

        <div className="mt-24">
          <button
            className="btn btn-primary is-capitalize"
            onClick={handleSubmit}
          >
            create user
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default CreateUserForm;
