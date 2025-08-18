import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/AddExperience.css"
import "../css/Manage.css"
import { toast } from 'react-toastify';

const UpdateGraphic = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    category: 'general',
    imageSrc: null
  });

  const [existingImage, setExistingImage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/admin/graphics/${id}`)
      .then(res => {
        const graphic = res.data;
        setFormData({
          name: graphic.name,
          category: graphic.category || 'general',
          imageSrc: null // don't prefill file input
        });
        setExistingImage(graphic.imageSrc ? `http://localhost:5000${graphic.imageSrc}` : '');
      })
      .catch(err => console.error("Failed to fetch graphic:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageSrc") {
      setFormData(prev => ({ ...prev, imageSrc: files[0] }));
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
      await axios.put(`http://localhost:5000/api/admin/graphics/${id}`, updatedFormData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Graphic updated successfully!");
      navigate('/admin/graphics'); // Adjust this route as needed
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Update failed. Check console.");
    }
  };

  return (
    <div className="form_container div_top_changes">
      <h1>Update Graphic</h1>
      <form className='add-event' onSubmit={handleSubmit} encType="multipart/form-data">
        <input 
          name="name" 
          type="text" 
          placeholder="Graphic Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        
        {/* <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
          style={{
            padding: '12px 14px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            fontSize: '15px',
            backgroundColor: '#f9f9f9'
          }}
        >
          <option value="general">General</option>
          <option value="logo">Logo</option>
          <option value="banner">Banner</option>
          <option value="poster">Poster</option>
          <option value="illustration">Illustration</option>
          <option value="branding">Branding</option>
        </select> */}

        <input 
          name="category" 
          type="text" 
          placeholder="Graphic Name" 
          value={formData.category} 
          onChange={handleChange} 
          required 
        />
        
        {/* Show existing image preview */}
        {existingImage && !formData.imageSrc && (
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '14px', color: '#555' }}>Current graphic:</p>
            <img 
              src={`${existingImage}?t=${new Date().getTime()}`} 
              alt="graphic" 
              style={{ 
                maxWidth: '300px', 
                maxHeight: '300px', 
                objectFit: 'contain', 
                borderRadius: '5px',
                border: '1px solid #ddd'
              }} 
            />
          </div>
        )}

        {/* File input */}
        <label className="custom-file-upload">
          <input 
            name="imageSrc" 
            type="file" 
            accept="image/*" 
            onChange={handleChange} 
          />
          {formData.imageSrc ? formData.imageSrc.name : "Choose new image (optional)"}
        </label>

        <button type="submit">Update Graphic</button>
      </form>
    </div>
  );
};

export default UpdateGraphic;