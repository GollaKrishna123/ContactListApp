import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ padding: "20px 0px" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          float: "right",
          paddingTop: "8px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{
            color: "blue",
            float: "right",
            paddingTop: "8px",
            cursor: "pointer",
          }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
