import React, { useState } from 'react';
import API from "../utils/api"
import { toast } from 'react-toastify';
import "../css/AddExperience.css"; // Reuse same styling

const AddExperience = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    description: '',
    logoSrc: null, // file upload
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logoSrc") {
      setFormData({ ...formData, logoSrc: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const experienceData = new FormData();
      for (let key in formData) {
        experienceData.append(key, formData[key]);
      }

      await API.post(
         process.env.REACT_APP_API_URL,
        experienceData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Experience added successfully!");
      setFormData({
        companyName: '',
        role: '',
        description: '',
        logoSrc: null,
        startDate: '',
        endDate: ''
      });
    } catch (err) {
      toast.error("Error adding experience!",err);
      console.error(err);
    }
  };

  return (
    <div className="form_contianer">
      <h1>Add Expereince</h1>
      <form className='add-event' onSubmit={handleSubmit} encType="multipart/form-data">
        
        <input 
          name="companyName" 
          type="text" 
          placeholder="Company Name" 
          value={formData.companyName} 
          onChange={handleChange} 
          required
        />

        <input 
          name="role" 
          type="text" 
          placeholder="Role" 
          value={formData.role} 
          onChange={handleChange} 
          required
        />

        <textarea 
          name="description" 
          placeholder="Description" 
          value={formData.description} 
          onChange={handleChange} 
          required
        />

        <label htmlFor="startDate" className='textm'>Start Date</label>
        <input 
          name="startDate" 
          type="date" 
          value={formData.startDate} 
          onChange={handleChange} 
        />

        <label htmlFor="endDate" className='textm'>End Date</label>
        <input 
          name="endDate" 
          type="date" 
          value={formData.endDate} 
          onChange={handleChange} 
        />

        <label className="custom-file-upload">
          <input 
            name="logoSrc" 
            type="file" 
            accept="image/*" 
            onChange={handleChange} 
          />
          {formData.logoSrc ? formData.logoSrc.name : "Choose Company Logo"}
        </label>

        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
};

export default AddExperience;
