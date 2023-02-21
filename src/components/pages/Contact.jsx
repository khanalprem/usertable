import React, { useState } from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { useAppContext } from "../../context/store";

const Contact = () => {
  const { data } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
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
      message !== ""
    ) {
      setSuccess("Form is successfully submitted");
    }
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
    return (<>
      {value && <p className="fs-md mt-4 is-error">{value}</p>}
      </>
    )
  }


  const contactData = data?.filter((item) => item?.name === "contact")[0]
  ?.contactItems || [];
  return (
    <>
      <div className="hero is-flex is-center  dir-column ">
        <div className="container">
          <div className="hero-content hero-content_page clr-white">
            <h5 className="fw-600 ">
              <span className="line-shape pb-12 line-shape_left">
                get in touch
              </span>
            </h5>
            <h1 className="mt-32 mb-32 fs-h2 ">
              We would love to <span className="italic">hear </span>from you.
            </h1>
            <p className="fw-500">
              Get in <span className="italic">touch </span> us for got more{" "}
              <span className="italic">ideas</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <p className="fw-600 is-capitalize">
            <span className="line-shape pb-12 line-shape_left">
              send message
            </span>
          </p>
          <div className="contact-wrap">
            <div className="contact-col">
              <ul className="contact-list mt-40">
                {contactData.map((item,index) => {
                  return (
                    <li className="is-flex is-start is-align-center col-gap-16 radius-8 py-16 px-24" key={index}>
                      <div className="is-square is-square_circle is-square_sm">
                        {item.icon}
                      </div>
                      <div className="contact-list_content">
                        <p className="fw-600">{item.name}</p>
                        <span className="">{item.address}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="contact-col">
              <form
                className="contact-form mt-40"
                onSubmit={() => handleSubmit}
              >
                {success && <p className="is-success fs-lg fw-600">{success}</p>}
                <div className="contact-form_wrap">
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
                      name="subject"
                      value={formData.subject}
                      placeholder="Subject"
                      onChange={onChange}
                    />
                    {errorText(error.subject)}
                  </div>
                </div>
                <div className="form-group my-24">
                  <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    placeholder="Message"
                    onChange={onChange}
                  ></textarea>
                  {errorText(error.message)}
                </div>
                <button
                  className="btn btn-primary is-capitalize"
                  onClick={handleSubmit}
                >
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
