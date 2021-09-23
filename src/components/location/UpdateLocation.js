import React, { useState, useEffect } from "react";

const UpdateLocation = ({
  updateLocation,
  updatingLocation,
  setUpdateLocation,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    rent: "",
    email: "",
    phone: "",
    coordinates: "",
    street_number: 0,
    street_name: "",
    postal_code: 0,
    status: "Available",
  });

  useEffect(() => {
    setFormData({
      name: updateLocation.name ? updateLocation.name : "",
      rent: updateLocation.rent ? updateLocation.rent : "",
      email: updateLocation.email ? updateLocation.email : "",
      phone: updateLocation.phone ? updateLocation.phone : "",
      coordinates: updateLocation.coordinates ? updateLocation.coordinates : "",
      street_number: updateLocation.street_number
        ? updateLocation.street_number
        : 0,
      street_name: updateLocation.street_name ? updateLocation.street_name : "",
      postal_code: updateLocation.postal_code ? updateLocation.postal_code : 0,
      status: updateLocation.status ? updateLocation.status : "Available",
    });
  }, [updateLocation]);

  const {
    name,
    rent,
    email,
    phone,
    coordinates,
    street_number,
    street_name,
    postal_code,
    status,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please add a name");
      return;
    }
    if (!rent) {
      alert("Please add a rent");
      return;
    }
    if (!email) {
      alert("Please add a email");
      return;
    }
    if (!phone) {
      alert("Please add a phone");
      return;
    }
    if (!coordinates) {
      alert("Please add a coordinates");
      return;
    }
    if (!street_number) {
      alert("Please add a street number");
      return;
    }
    if (!street_name) {
      alert("Please add a street name");
      return;
    }
    if (!postal_code) {
      alert("Please add a postal code");
      return;
    }
    if (!status) {
      alert("Please add a status");
      return;
    }
    setUpdateLocation({});
    updatingLocation(formData, updateLocation.id);
  };

  return (
    <div className='p-5 d-flex flex-column location-form'>
      <div className='d-flex justify-content-between'>
        <h2>Update Location</h2>
        <button
          className='btn btn-danger'
          onClick={() => setUpdateLocation(false)}
        >
          <i className='fa fa-times'></i>
        </button>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='Name'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Rent' className='form-label'>
            Rent
          </label>
          <input
            type='number'
            className='form-control'
            id='Rent'
            placeholder='Rent'
            name='rent'
            value={rent}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            id='Email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Phone' className='form-label'>
            Phone
          </label>
          <input
            type='text'
            className='form-control'
            id='Phone'
            placeholder='Phone'
            name='phone'
            value={phone}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Coordinates' className='form-label'>
            Coordinates
          </label>
          <input
            type='text'
            className='form-control'
            id='Coordinates'
            placeholder='Coordinates'
            name='coordinates'
            value={coordinates}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Street-number' className='form-label'>
            Street number
          </label>
          <input
            type='text'
            className='form-control'
            id='Street-number'
            placeholder='Street number'
            name='street_number'
            value={street_number}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Street-name' className='form-label'>
            Street name
          </label>
          <input
            type='text'
            className='form-control'
            id='Street-name'
            placeholder='Street name'
            name='street_name'
            value={street_name}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='Postal-code' className='form-label'>
            Postal code
          </label>
          <input
            type='text'
            className='form-control'
            id='Postal-code'
            placeholder='Postal code'
            name='postal_code'
            value={postal_code}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-3 d-flex flex-column'>
          <label htmlFor='status' className='form-label'>
            Status
          </label>
          <select
            className='form-select'
            aria-label='Default select example'
            id='status'
            name='status'
            value={status}
            onChange={(e) => onChange(e)}
          >
            <option selected value='Available'>
              Available
            </option>
            <option value='Unavailable'>Unavailable</option>
            <option value='Active'>Active</option>
          </select>
        </div>
        <button type='submit' className='btn btn-outline-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateLocation;
