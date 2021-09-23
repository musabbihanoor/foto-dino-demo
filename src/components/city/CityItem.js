import React from "react";

const CityItem = ({
  city: { id, code, name, locations },
  city,
  deleteCity,
  setUpdatingCity,
  fetchLocations,
  setCity,
  setAddCity,
}) => {
  return (
    <div className='cityItem mx-auto p-3'>
      <img
        alt='location'
        src='https://images-platform.99static.com//6lGOzEAYLsS0U1etk92iqtXunGw=/1145x1239:1844x1938/fit-in/500x500/99designs-contests-attachments/110/110086/attachment_110086393'
      ></img>
      <div className='d-flex flex-column' style={{ width: "100%" }}>
        <h1>{id + ". " + name}</h1>
        <h2>{locations.length + " locations to visit"}</h2>
        <div className='d-flex justify-content-between'>
          <h3>{"code: " + code}</h3>
          <div>
            <button
              className='btn btn-outline-success ml-1'
              onClick={() => {
                setUpdatingCity(city);
                setAddCity(true);
              }}
            >
              <i className='fa fa-edit'></i>
            </button>
            <button
              className='btn btn-outline-danger mx-1'
              onClick={() => deleteCity(id)}
            >
              <i className='fa fa-trash'></i>
            </button>
            <button
              className='btn btn-sm btn-outline-primary'
              onClick={() => {
                fetchLocations(id);
                setCity(city);
              }}
            >
              Locations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityItem;
