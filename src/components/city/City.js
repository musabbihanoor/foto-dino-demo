import React from "react";
import LocationItem from "../location/LocationItem";

const City = ({
  city: { name, code },
  locations,
  setCity,
  setLocations,
  setUpdateLocation,
  setAddLocation,
  deleteLocation,
}) => {
  return (
    <div className='city d-flex flex-column'>
      <button
        className='btn btn-sm btn-secondary'
        onClick={() => {
          setCity({});
          setLocations([]);
          setAddLocation(false);
          setUpdateLocation(false);
        }}
      >
        <i className='fa fa-times'></i>
      </button>
      <h1>{name}</h1>
      <h2>{"- code: " + code}</h2>
      <h3>Places to visit</h3>
      <button
        className='btn btn-primary'
        onClick={() => {
          setAddLocation(true);
          setUpdateLocation({});
        }}
      >
        <i className='fa fa-plus'></i> Add a location
      </button>
      {locations.map((location) => (
        <LocationItem
          location={location}
          setUpdateLocation={setUpdateLocation}
          deleteLocation={deleteLocation}
          setAddLocation={setAddLocation}
        />
      ))}
    </div>
  );
};

export default City;
