// UserForm.js
import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log('Form data actual:', formData);
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form data submitted:', formData);
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
    </label>
    <label>
      Email:
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
    </label>

    <label>
      Message:
      <textarea name="message" onChange={handleChange} >{formData.email}</textarea>
    </label>

    <button type="submit">Submit</button>
  </form>
);
}

export default UserForm;
