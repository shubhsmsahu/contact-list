import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateContact = ({ handleContactList }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="create-input">
      <div className="input-div">
        <label>Name</label>
        <input
          className="input1"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="input-div">
        <label>Contact</label>
        <input
          className="input1"
          type="number"
          placeholder="Enter Contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </div>
      <div className="input-div">
        <label>City</label>
        <input
          className="input1"
          type="text"
          placeholder="Entet City Name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div className="create-button">
        <button
          className="btn btn-primary"
          onClick={() => handleContactList(name, contact, city)}
        >
          Create Contact
        </button>
      </div>
    </div>
  );
};

export default CreateContact;
