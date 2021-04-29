import React, { useState } from "react";
import "./App.css";
import CreateContact from "./components/CreateContact";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";

function App() {
  const [contactList, setContactList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const handleContactList = (Name, Contact, City) => {
    if (Name !== "" && Contact !== "" && City !== "") {
      setContactList([
        ...contactList,
        {
          Name: Name,
          Contact: Contact,
          City: City,
        },
      ]);
    }
  };
  const handleSearch = (searchVal) => {
    const list = contactList.filter((data, i) => {
      return (
        data.Name.includes(searchVal) ||
        data.Contact.includes(searchVal) ||
        data.City.includes(searchVal)
      );
    });
    setSearchList(list);
  };
  return (
    <>
      <h1 className="navbar navbar-light bg-light">Contact List</h1>
      <div className="App">
        <CreateContact handleContactList={handleContactList} />
        <SearchContact handleSearch={handleSearch} />
        {searchList.length > 0 ? (
          <ContactList
            contactList={searchList}
            setContactList={setSearchList}
          />
        ) : (
          <ContactList
            contactList={contactList}
            setContactList={setContactList}
          />
        )}
      </div>
    </>
  );
}

export default App;
