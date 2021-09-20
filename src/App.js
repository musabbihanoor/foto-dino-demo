import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Cities from "./components/city/Cities";
import CityForm from "./components/city/CityForm";
import City from "./components/city/City";

import "./App.css";
import LocationForm from "./components/location/LocationForm";
import UpdateLocation from "./components/location/UpdateLocation";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [searchCity, setSearchCity] = useState({
    text: "",
    cities: [],
  });
  const [sortType, setSortType] = useState("id");
  const [updatingCity, setUpdatingCity] = useState({});
  const [updateLocation, setUpdateLocation] = useState({});
  const [locations, setLocations] = useState([]);
  const [addLocation, setAddLocation] = useState(false);

  useEffect(() => {
    const getCities = async () => {
      const CitiesFromServer = await fetchCities();
      setCities(CitiesFromServer);
      setLoading(false);
    };
    getCities();
  }, []);

  //City methods

  const fetchCities = async () => {
    const res = await axios.get("cities/");
    const data = await res.data;
    return data;
  };

  const createCity = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("cities/", formData, config).then((res) => {
      const data = res.data;
      setCities([...cities, data]);
    });
  };

  const updateCity = async (data, id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(`cities/${id}/`, data, config).then((res) => {
      const data = res.data;
      setCities(
        cities.map((city) =>
          city.id === id ? { ...city, name: data.name, code: data.code } : city
        )
      );
    });
  };

  const deleteCity = async (id) => {
    await axios.delete(`cities/${id}/`);
    setCities(cities.filter((city) => city.id !== id));
  };

  //location methods

  const fetchLocations = async (cityId) => {
    await axios
      .get("locations/", { params: { city_id: cityId } })
      .then((res) => {
        const data = res.data;
        setLocations(data);
      });
  };

  const createLocation = async (formData) => {
    formData = { ...formData, city: city.id };
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("locations/", formData, config).then((res) => {
      const data = res.data;
      setLocations([...locations, data]);
    });
  };

  const updatingLocation = async (data, id) => {
    data = { ...data, city: city.id };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.put(`locations/${id}/`, data, config).then((res) => {
      const data = res.data;
      setLocations(
        locations.map((location) => (location.id === id ? data : location))
      );
    });
  };

  const deleteLocation = async (id) => {
    await axios.delete(`locations/${id}/`);
    setLocations(locations.filter((location) => location.id !== id));
  };

  return (
    <div className='App'>
      <Fragment>
        <Navbar
          setSortType={setSortType}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          cities={cities}
        />
        <div>
          <div className='d-flex flex-column'>
            {!addLocation && !updateLocation.id && (
              <CityForm
                createCity={createCity}
                updatingCity={updatingCity}
                setUpdatingCity={setUpdatingCity}
                updateCity={updateCity}
              />
            )}
            {addLocation && (
              <LocationForm
                createLocation={createLocation}
                setAddLocation={setAddLocation}
              />
            )}
            {updateLocation.id && (
              <UpdateLocation
                updateLocation={updateLocation}
                updatingLocation={updatingLocation}
                setUpdateLocation={setUpdateLocation}
              />
            )}
          </div>

          {loading ? (
            <img
              className='mx-auto'
              src='https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif'
              alt='loading'
            ></img>
          ) : (
            !addLocation &&
            !updateLocation.id && (
              <Cities
                sortType={sortType}
                cities={searchCity.text !== "" ? searchCity.cities : cities}
                deleteCity={deleteCity}
                setUpdatingCity={setUpdatingCity}
                setCities={setCities}
                fetchLocations={fetchLocations}
                setCity={setCity}
              />
            )
          )}
          {city.id && !addLocation && !updateLocation.id && (
            <City
              city={city}
              locations={locations}
              setCity={setCity}
              setLocations={setLocations}
              setUpdateLocation={setUpdateLocation}
              setAddLocation={setAddLocation}
              deleteLocation={deleteLocation}
            />
          )}
        </div>{" "}
      </Fragment>
    </div>
  );
};

export default App;
