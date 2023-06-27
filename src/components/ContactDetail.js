import React from "react";
import user from "../images/user.jpg";
import { Link, useLocation } from "react-router-dom";
const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  console.log(name);
  console.log(email);

  return (
    <div className="main">
      <div className="ui card centered" style={{ marginTop: "60px" }}>
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div
        className="center-div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "6vh",
        }}
      >
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
