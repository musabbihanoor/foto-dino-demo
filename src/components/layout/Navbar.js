import React, { useState } from "react";

const Navbar = ({
  setSortType,
  setSearchCity,
  searchCity,
  cities,
  setAddCity,
  setCities,
}) => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    var re = new RegExp(searchText.toLowerCase(), "g");
    const searched = cities.filter((city) => city.name.toLowerCase().match(re));
    setSearchCity({
      ...searchCity,
      cities: searched,
      text: searchText,
      searching: true,
    });
    setSearchText("");
  };

  const sortArray = (sortType) => {
    if (sortType === "name") {
      setCities((cities) => [
        ...cities.sort((a, b) => (a.name > b.name ? 1 : -1)),
      ]);
      return;
    }
    if (sortType === "id") {
      setCities((cities) => [...cities.sort((a, b) => a.id - b.id)]);
      return;
    }
    if (sortType === "id2") {
      setCities((cities) => [...cities.sort((a, b) => b.id - a.id)]);
      return;
    }
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light fixed-top'
      style={{ zIndex: "100" }}
    >
      <div className='container-fluid'>
        <h1 className='navbar-brand'>Foto Dino</h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
        >
          <form className='d-flex mx-5' onSubmit={onSubmit}>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search a city'
              aria-label='Search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: "300px" }}
            />
            <button className='btn btn-success' type='submit'>
              Search
            </button>
          </form>
          <div className='mx-5'>
            <p className='my-auto mx-2'>Sort by: </p>
            <ul className='navbar-nav'>
              <select
                onChange={(e) => {
                  sortArray(e.target.value);
                  setSortType(e.target.value);
                }}
                className='form-select'
              >
                <option className='dropdown-item' value='id'>
                  Oldest
                </option>
                <option className='dropdown-item' value='name'>
                  Name
                </option>
                <option className='dropdown-item' value='id2'>
                  Newly Added
                </option>
              </select>
            </ul>
          </div>

          <button
            className='btn btn-warning mx-3'
            aria-current='page'
            onClick={() => setAddCity(true)}
          >
            <i className='fa fa-plus'></i> Add City
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
