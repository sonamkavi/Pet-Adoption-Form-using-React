import React, { useState } from 'react';

function Form({ onFormSubmit }) {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [adopterName, setAdopterName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (petName.length < 3) newErrors.petName = 'Pet Name must be at least 3 characters';
    if (breed.length < 3) newErrors.breed = 'Breed must be at least 3 characters';
    if (adopterName.length < 3) newErrors.adopterName = 'Adopter’s Name must be at least 3 characters';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = 'Enter a valid email';

    if (!/^\d{10}$/.test(mobile)) newErrors.mobile = 'Mobile number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = { petName, petType, breed, adopterName, email, mobile };
      onFormSubmit(formData);
      setPetName(''); setPetType(''); setBreed('');
      setAdopterName(''); setEmail(''); setMobile('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pet Name"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
      />
      {errors.petName && <small style={{ color: 'red' }}>{errors.petName}</small>}

      <input
        type="text"
        placeholder="Pet Type"
        value={petType}
        onChange={(e) => setPetType(e.target.value)}
      />

      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      {errors.breed && <small style={{ color: 'red' }}>{errors.breed}</small>}

      <input
        type="text"
        placeholder="Adopter's Name"
        value={adopterName}
        onChange={(e) => setAdopterName(e.target.value)}
      />
      {errors.adopterName && <small style={{ color: 'red' }}>{errors.adopterName}</small>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      {errors.mobile && <small style={{ color: 'red' }}>{errors.mobile}</small>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
