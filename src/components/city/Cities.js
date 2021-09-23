import React from "react";
import CityItem from "./CityItem";

const Cities = ({
  cities,
  deleteCity,
  setUpdatingCity,
  fetchLocations,
  setCity,
  setAddCity,
  setSearchCity,
  searchCity,
}) => {
  return (
    <div className='cities d-flex flex-column py-5 m-5'>
      <div className='d-flex flex-row justify-content-between px-5'>
        <h1>Cities</h1>
        {searchCity.searching && (
          <button className='btn btn-danger' style={{ height: "40px" }}>
            <i
              className='fa fa-times'
              onClick={() => {
                setSearchCity({
                  ...searchCity,
                  searching: false,
                  text: "",
                  cities: [],
                });
              }}
            ></i>
          </button>
        )}
      </div>

      {cities.map((city) => (
        <CityItem
          key={city.id}
          city={city}
          deleteCity={deleteCity}
          setUpdatingCity={setUpdatingCity}
          fetchLocations={fetchLocations}
          setCity={setCity}
          setAddCity={setAddCity}
        />
      ))}
    </div>
  );
};

export default Cities;
