import React from "react";
import Contact from "./Contact";
// import "../css/list.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactList = ({ contactList, setContactList }) => {
  const addUpadatOnList = (inputVal, index, val, setIsUpdate) => {
    const copyList = [...contactList];
    if (inputVal !== "") {
      if (val === copyList[index].Name) copyList[index].Name = inputVal;
      else if (val === copyList[index].Contact)
        copyList[index].Contact = inputVal;
      else copyList[index].City = inputVal;
    }
    // console.log(copyList[index]);
    setIsUpdate({ show: false });
    setContactList(copyList);
  };
  const deleteContact = (index) => {
    // console.log(contactList);
    setContactList((preval) => {
      return preval.filter((arrEle, i) => {
        return index !== i;
      });
    });
  };

  return (
    <>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>City</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact, index) => {
              return (
                <Contact
                  key={index}
                  contact={contact}
                  index={index}
                  addUpadatOnList={addUpadatOnList}
                  deleteContact={deleteContact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactList;
