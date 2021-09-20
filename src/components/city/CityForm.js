import React, { useState, useEffect } from "react";

const CityForm = ({
  createCity,
  updatingCity,
  setUpdatingCity,
  updateCity,
}) => {
  const [code, setCode] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    setCode(updatingCity.code ? updatingCity.code : 0);
    setName(updatingCity.name ? updatingCity.name : "");
  }, [updatingCity]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a name");
      return;
    }
    if (!code) {
      alert("Please add a code");
      return;
    }

    if (updatingCity.id !== undefined) {
      updateCity({ code, name }, updatingCity.id);
    } else {
      console.log("null");
      createCity({ code, name });
    }

    setUpdatingCity({});
    setCode(0);
    setName("");
  };

  const onClear = () => {
    setUpdatingCity({});
  };

  return (
    <form className='city-form m-5' onSubmit={onSubmit}>
      <h2>City Form</h2>
      <div className='mb-3 d-flex flex-column'>
        <label htmlFor='code' className='form-label'>
          Code
        </label>
        <input
          type='number'
          className='form-control'
          id='code'
          placeholder='Code'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className='mb-3 d-flex flex-column'>
        <label htmlFor='Name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='Name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {updatingCity.id ? (
        <button type='submit' className='btn btn-outline-primary'>
          Update
        </button>
      ) : (
        <button type='submit' className='btn btn-outline-primary'>
          Submit
        </button>
      )}
      <button
        type='reset'
        onClick={() => onClear()}
        className='btn btn-outline-warning mx-2'
      >
        Clear
      </button>
    </form>
  );
};

export default CityForm;
