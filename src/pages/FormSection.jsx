import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function FormSection() {
 const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    saveInfo: false,
  });

  const [errors, setErrors] = useState({});

  const statesByCountry = {
    India: ['West Bengal', 'Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka'],
    USA: ['California', 'Texas', 'New York', 'Florida', 'Washington'],
    UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'country' && { state: '' }), // Reset state if country changes
    }));
  };

 

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'Zip Code is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Enter valid phone number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const orderId = uuidv4(); // Generate order ID
      const orderDetails = { ...formData, orderId, status: 'pending' };

      // Optional: Save to localStorage or Context
      localStorage.setItem('latestOrder', JSON.stringify(orderDetails));

      // Navigate to Thank You page with orderId
      navigate(`/Thankyou?orderId=${orderId}`);
    }
  };

  return (
    <form className="form_container" onSubmit={handleSubmit} noValidate>
      <h4 className="font-size20 font-family1 pb-2">Contact</h4>
      <div className="form-group shop-item">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-danger font-size12 mt-1">{errors.email}</p>}
        <label className="shop-check mt-3">
          Email me with news and offers
          <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="padd-top-40 delivery">
        <h4 className="font-size20 font-family1 pb-2">Delivery</h4>
        <div className="grid grid-columns-2 columns-gap">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-danger font-size12 mt-1">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-danger font-size12 mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="form-group">
          <select name="country" className="form-control" value={formData.country} onChange={handleChange}>
            <option value="">Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          {errors.country && <p className="text-danger font-size12 mt-1">{errors.country}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="text-danger font-size12 mt-1">{errors.address}</p>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-danger font-size12 mt-1">{errors.phone}</p>}
        </div>

        <div className="grid grid-columns-3 columns-gap">
          <div className="form-group">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="text-danger font-size12 mt-1">{errors.city}</p>}
          </div>
          <div className="form-group">
          <select
  name="state"
  className="form-control"
  value={formData.state}
  onChange={handleChange}
  disabled={!formData.country}
>
  <option value="">State</option>
  {statesByCountry[formData.country]?.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ))}
</select>
            {errors.state && <p className="text-danger font-size12 mt-1">{errors.state}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="zip"
              className="form-control"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && <p className="text-danger font-size12 mt-1">{errors.zip}</p>}
          </div>
        </div>
      </div>

      <div className="payment padd-top-40">
        <h4 className="font-size20 font-family1 pb-2">Payment</h4>
        <div className="payment-cod">
          <label className="radio font-family1">
            Cash on delivery
            <input type="radio" name="payment" defaultChecked />
            <span className="checkmark-radio"></span>
          </label>
          <p className="font-size12 font-weight300 pt-3">Pay with cash upon delivery.</p>
        </div>
      </div>

      <button type="submit" className="btn checkout-btn w-100 mt-5 py-3">
        Pay Now
      </button>
    </form>
  );
}

export default FormSection;
