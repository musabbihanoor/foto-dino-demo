import React, { useState } from "react";
import Location from "./Location";

const LocationItem = ({
  location: { name, rent, street_name, status },
  setUpdateLocation,
  location,
  deleteLocation,
  setAddLocation,
}) => {
  const [viewLocation, setViewLocation] = useState(false);

  return (
    <div className='location-item justify-content-between align-items-end'>
      <div className='d-flex flex-column' style={{ width: "100%" }}>
        <h4>{name}</h4>
        <h5>{"Rent: $" + rent}</h5>
        <h6>{"Address: " + street_name}</h6>

        {viewLocation && (
          <Location
            location={location}
            setViewLocation={setViewLocation}
            deleteLocation={deleteLocation}
            setUpdateLocation={setUpdateLocation}
            setAddLocation={setAddLocation}
          />
        )}
        {status === "Available" && (
          <h6>
            <i className='fa fa-circle' style={{ color: "green" }}></i>{" "}
            Available
          </h6>
        )}

        {status === "Unavailable" && (
          <h6>
            <i className='fa fa-circle' style={{ color: "red" }}></i>{" "}
            Unavailable
          </h6>
        )}

        {status === "Active" && (
          <h6>
            <i className='fa fa-circle' style={{ color: "yellow" }}></i> Active
          </h6>
        )}
      </div>
      {!viewLocation && (
        <button
          className='btn btn-outline-primary btn-sm'
          onClick={() => {
            setViewLocation(true);
          }}
        >
          <i className='fa fa-eye'></i>
        </button>
      )}
    </div>
  );
};

export default LocationItem;
