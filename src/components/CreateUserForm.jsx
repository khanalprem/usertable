import React,{useEffect, useState} from "react";

const CreateUserForm = ({userData,setUserData}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: [],
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: [],
  });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    initialUserDetail && setFormData(initialUserDetail)
  }, [])

  console.log(formData)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address, avatar } = formData;
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
      address !== "" &&
      avatar !== ""
    ) {
    setUserData([...userData,{...formData}])
      setSuccess("Form is successfully submitted");
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    const { name, value, type } = e.target;
    if (type === 'file') {
      setFormData(({ ...formData, [name]: e.target.files[0]}))
    } else setFormData({ ...formData, [name]: value });
    if (formData[name] !== "") {
      setError({ ...error, [name]: "" });
    }
  };

  const errorText = (value) => {
    return <>{value && <p className="fs-md mt-4 is-error">{value}</p>}</>;
  };
  return (
    <form className="users-form mt-40" onSubmit={handleSubmit}>
      {success && <p className="is-success fs-lg fw-600">{success}</p>}
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
            value={formData.email}
            placeholder="Email Address"
            onChange={onChange}
          />
          {errorText(error.email)}
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={onChange}
          />
          {errorText(error.phone)}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="address"
            onChange={onChange}
          />
          {errorText(error.address)}
        </div>
        <div className="form-group">
          <input
            type="file"
            name="avatar"
            value={formData.avatar}
            onChange={onChange}
          />
          {errorText(error.avatar)}
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
  );
};

export default CreateUserForm;
