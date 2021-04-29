import React, { useState } from "react";

const UpdateContact = ({ type, name, index, val, addUpadatOnList }) => {
  const [isUpdate, setIsUpdate] = useState({
    show: false,
  });
  const [inputVal, setInputVal] = useState("");
  const handleInput = () => {
    setIsUpdate({ show: true });
  };
  const handleUpdate = (event) => {
    // console.log(event.target.name);
    setInputVal(event.target.value);
  };
  const callAddFunc = () => {
    addUpadatOnList(inputVal, index, val, setIsUpdate);
  };

  return (
    <>
      {isUpdate.show ? (
        <>
          <input
            type={type}
            name={name}
            value={inputVal}
            onChange={handleUpdate}
          />
          <button className="btn btn-primary" onClick={callAddFunc}>
            Add
          </button>{" "}
        </>
      ) : (
        <button className="btn btn-primary" onClick={handleInput}>
          update
        </button>
      )}
    </>
  );
};

export default UpdateContact;
