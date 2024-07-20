import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './UserForm.css';


const UserForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    age: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    web: '',
  });
  const [editing, setEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${id}`);
          setUser(response.data);
          setEditing(true);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userPayload = {
        ...user,
        age: Number(user.age),
        zip: Number(user.zip),
      };
  
      console.log("Submitting user payload:", userPayload); // Log payload for debugging
  
      if (editing) {
        await axios.put(`http://localhost:5000/api/users/${id}`, userPayload);
      } else {
        await axios.post('http://localhost:5000/api/users', userPayload);
      }
  
      navigate('/');
    } catch (err) {
      console.error("Error submitting form:", err); // Log error for debugging
    }
  };
  

  return (
    <div className="user-form-container">
      <h2>{editing ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="companyName"
          value={user.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="state"
          value={user.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          type="number"
          name="zip"
          value={user.zip}
          onChange={handleChange}
          placeholder="Zip Code"
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="web"
          value={user.web}
          onChange={handleChange}
          placeholder="Website"
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} User</button>
      </form>
    </div>
  );
};

export default UserForm;
