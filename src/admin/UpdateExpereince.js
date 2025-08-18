
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/AddExperience.css"
import "../css/Manage.css"
import { toast } from 'react-toastify';

const UpdateExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    description: '',
    startDate: '',
    endDate: '',
    logoSrc: null
  });

  const [existingLogo, setExistingLogo] = useState('');

  useEffect(() => {
    axios.get(`/api/admin/experiences/${id}`)
      .then(res => {
        const experience = res.data;
        setFormData({
          companyName: experience.companyName,
          role: experience.role,
          description: experience.description,
          startDate: experience.startDate ? experience.startDate.slice(0, 10) : '',
          endDate: experience.endDate ? experience.endDate.slice(0, 10) : '',
          logoSrc: null // don't prefill file input
        });
        const API_URL = process.env.REACT_APP_API_URL;
        setExistingLogo(experience.logoSrc ? `${API_URL}${experience.logoSrc}` : '');
      })
      .catch(err => console.error("Failed to fetch experience:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logoSrc") {
      setFormData(prev => ({ ...prev, logoSrc: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = new FormData();

    for (let key in formData) {
      if (formData[key]) { // only append non-null fields
        updatedFormData.append(key, formData[key]);
      }
    }

    try {
      await axios.put(`/api/admin/experiences/${id}`, updatedFormData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Experience updated successfully!");
      navigate('/admin/experiences'); // Adjust this route as needed
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Update failed. Check console.");
    }
  };

  return (
    <div className="form_container div_top_changes">
      <h1>Update Experience</h1>
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
          placeholder="Role/Position" 
          value={formData.role} 
          onChange={handleChange} 
          required 
        />
        
        <textarea 
          name="description" 
          placeholder="Job Description" 
          value={formData.description} 
          onChange={handleChange} 
          required
        />
        
        <input 
          name="startDate" 
          type="date" 
          placeholder="Start Date"
          value={formData.startDate} 
          onChange={handleChange} 
        />
        
        <input 
          name="endDate" 
          type="date" 
          placeholder="End Date"
          value={formData.endDate} 
          onChange={handleChange} 
        />
        
        {/* Show existing logo preview */}
        {existingLogo && !formData.logoSrc && (
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '14px', color: '#555' }}>Current company logo:</p>
            <img 
              src={`${existingLogo}?t=${new Date().getTime()}`} 
              alt="company logo" 
              style={{ width: '150px', height: '150px', objectFit: 'contain', borderRadius: '5px' }} 
            />
          </div>
        )}

        {/* File input */}
        <label className="custom-file-upload">
          <input 
            name="logoSrc" 
            type="file" 
            accept="image/*" 
            onChange={handleChange} 
          />
          {formData.logoSrc ? formData.logoSrc.name : "Choose new company logo (optional)"}
        </label>

        <button type="submit">Update Experience</button>
      </form>
    </div>
  );
};

export default UpdateExperience;