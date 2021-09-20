import React, { useEffect } from "react";
import CityItem from "./CityItem";

const Cities = ({
  cities,
  setCities,
  sortType,
  deleteCity,
  setUpdatingCity,
  fetchLocations,
  setCity,
}) => {
  useEffect(() => {
    const sortArray = () => {
      if (sortType === "id") {
        const sorted = cities.sort((a, b) => (a.name > b.name ? 1 : -1));
        setCities(sorted);
        return;
      }
      if (sortType === "name") {
        const sorted = cities.sort((a, b) => a.id - b.id);
        setCities(sorted);
        return;
      }
    };

    sortArray();
  }, [cities, setCities, sortType]);

  return (
    <div className='cities d-flex flex-column'>
      {cities.map((city) => (
        <CityItem
          key={city.id}
          city={city}
          deleteCity={deleteCity}
          setUpdatingCity={setUpdatingCity}
          fetchLocations={fetchLocations}
          setCity={setCity}
        />
      ))}
    </div>
  );
};

export default Cities;
