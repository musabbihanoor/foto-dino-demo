import React from "react";

const Location = ({
  location: { email, phone, postal_code, id },
  setViewLocation,
  deleteLocation,
  setUpdateLocation,
  location,
  setAddLocation,
}) => {
  return (
    <>
      <h6>{"Email: " + email}</h6>
      <h6>{"Phone: " + phone}</h6>
      <h6>{"Postal Code: " + postal_code}</h6>
      <div style={{ marginLeft: "auto" }}>
        <button
          className='btn btn-outline-warning btn-sm'
          style={{ width: "40px" }}
          onClick={() => {
            setUpdateLocation(location);
            setAddLocation(false);
          }}
        >
          <i className='fa fa-edit'></i>
        </button>
        <button
          className='btn btn-outline-danger btn-sm mx-1'
          style={{ width: "40px" }}
          onClick={() => deleteLocation(id)}
        >
          <i className='fa fa-trash'></i>
        </button>
        <button
          className='btn btn-outline-secondary btn-sm'
          style={{ width: "40px" }}
          onClick={() => setViewLocation(false)}
        >
          <i className='fa fa-angle-up'></i>
        </button>{" "}
      </div>
    </>
  );
};

export default Location;
