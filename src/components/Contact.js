import React from "react";
import UpdateContact from "./UpdateContact";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = ({ contact, index, addUpadatOnList, deleteContact }) => {
  return (
    <>
      <tr key={index}>
        <td key={1000 + index}>
          {contact.Name}{" "}
          <UpdateContact
            type="text"
            name="Name"
            index={index}
            val={contact.Name}
            addUpadatOnList={addUpadatOnList}
          />
        </td>
        <td key={1001 + index}>
          {contact.Contact}{" "}
          <UpdateContact
            type="number"
            name="Contact"
            index={index}
            val={contact.Contact}
            addUpadatOnList={addUpadatOnList}
          />
        </td>
        <td key={1002 + index}>
          {contact.City}{" "}
          <UpdateContact
            type="text"
            name="City"
            index={index}
            val={contact.City}
            addUpadatOnList={addUpadatOnList}
          />
        </td>
        <td key={1003 + index}>
          <button
            className="btn btn-primary"
            onClick={() => deleteContact(index)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Contact;
