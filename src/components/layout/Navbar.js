import React, { useState } from "react";

const Navbar = ({ setSortType, setSearchCity, searchCity, cities }) => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    var re = new RegExp(searchText.toLowerCase(), "g");
    const searched = cities.filter((city) => city.name.toLowerCase().match(re));
    setSearchCity({ ...searchCity, cities: searched, text: searchText });
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
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
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <select onChange={(e) => setSortType(e.target.value)}>
              <option className='dropdown-item' value='id'>
                Id
              </option>
              <option className='dropdown-item' value='name'>
                Name
              </option>
            </select>
          </ul>
          <form className='d-flex' onSubmit={onSubmit}>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
