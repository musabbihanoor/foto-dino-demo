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
  const [cities, setCities] = useState([{}]);
  const [city, setCity] = useState({});
  const [searchCity, setSearchCity] = useState({
    text: "",
    cities: [],
    searching: false,
  });
  const [addCity, setAddCity] = useState(false);
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
    await axios
      .post("https://api.photodino.com/locations/cities/", formData, config)
      .then((res) => {
        const data = res.data;

        if (sortType === "id2") {
          setCities([data, ...cities]);
        } else {
          setCities([...cities, data]);
        }
      });
  };

  const updateCity = async (data, id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .put(`https://api.photodino.com/locations/cities/${id}/`, data, config)
      .then((res) => {
        const data = res.data;
        setCities(
          cities.map((city) =>
            city.id === id
              ? { ...city, name: data.name, code: data.code }
              : city
          )
        );
      });
  };

  const deleteCity = async (id) => {
    await axios.delete(`https://api.photodino.com/locations/cities/${id}/`);
    setCities(cities.filter((city) => city.id !== id));
  };

  //location methods

  const fetchLocations = async (cityId) => {
    await axios
      .get("https://api.photodino.com/locations/locations/", {
        params: { city_id: cityId },
      })
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
    await axios
      .post("https://api.photodino.com/locations/locations/", formData, config)
      .then((res) => {
        const data = res.data;
        setLocations([data, ...locations]);
      });
  };

  const updatingLocation = async (data, id) => {
    data = { ...data, city: city.id };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .put(`https://api.photodino.com/locations/locations/${id}/`, data, config)
      .then((res) => {
        const data = res.data;
        setLocations(
          locations.map((location) => (location.id === id ? data : location))
        );
      });
  };

  const deleteLocation = async (id) => {
    await axios.delete(`https://api.photodino.com/locations/locations/${id}/`);
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
          setAddCity={setAddCity}
          setCities={setCities}
        />
        {addCity && (
          <CityForm
            createCity={createCity}
            updatingCity={updatingCity}
            setUpdatingCity={setUpdatingCity}
            updateCity={updateCity}
            setAddCity={setAddCity}
          />
        )}
        <div className='d-flex flex-column'>
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
        <div className='justify-content-center'>
          {loading ? (
            <img
              className='mx-auto'
              src='https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif'
              alt='loading'
            ></img>
          ) : (
            !addLocation &&
            !updateLocation.id &&
            !addCity && (
              <Cities
                cities={searchCity.searching ? searchCity.cities : cities}
                deleteCity={deleteCity}
                setUpdatingCity={setUpdatingCity}
                fetchLocations={fetchLocations}
                setCity={setCity}
                setAddCity={setAddCity}
                searchCity={searchCity}
                setSearchCity={setSearchCity}
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
