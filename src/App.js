import React, { useState } from 'react';
import DisplayFormData from './components/DisplayFormData';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: ''
  });

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
     <div>
      <h1 className='details'>Personal Details</h1>
    <form className='form'>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder='Name'
      /><br></br>
   
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder='Address'
      /><br></br>
      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder='Age'
      />
      <DisplayFormData formData={formData} />
    </form>
    </div>
  );
}

export default App;