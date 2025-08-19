import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from "../utils/api";
import "../css/AddExperience.css"
import "../css/Manage.css"
import { toast } from 'react-toastify';

const UpdateProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    startDate: '',
    endDate: '',
    img: null
  });

  const [existingImage, setExistingImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log('Fetching project with ID:', id); // Debug log
        
        // Get auth token (adjust the key name based on how you store it)
        const token = localStorage.getItem('authToken') || localStorage.getItem('token');
        console.log('Auth token:', token ? 'Present' : 'Missing'); // Debug log
        
        const config = token ? {
          headers: {
            'Authorization': `Bearer ${token}`,
            // Or use whatever header format your backend expects:
            // 'x-auth-token': token,
          }
        } : {};
        
        const res = await API.get(`/api/admin/projects/${id}`, config);
        console.log('API Response:', res.data); // Debug log
        
        const project = res.data;
        
        setFormData({
          title: project.title || '',
          link: project.link || '',
          description: project.description || '',
          startDate: project.startDate ? project.startDate.slice(0, 10) : '',
          endDate: project.endDate ? project.endDate.slice(0, 10) : '',
          img: null // don't prefill file input
        });
        
        const API_URL = process.env.REACT_APP_API_URL;
        setExistingImage(project.img ? `${API_URL}${project.img}` : '');
        
        console.log('Form data set:', { // Debug log
          title: project.title || '',
          link: project.link || '',
          description: project.description || '',
          startDate: project.startDate ? project.startDate.slice(0, 10) : '',
          endDate: project.endDate ? project.endDate.slice(0, 10) : ''
        });
        
      } catch (err) {
        console.error("Failed to fetch project:", err);
        toast.error("Failed to fetch project data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData(prev => ({ ...prev, img: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = new FormData();

    for (let key in formData) {
      if (formData[key] !== null && formData[key] !== undefined && formData[key] !== '') {
        updatedFormData.append(key, formData[key]);
      }
    }

    try {
      await API.put(`/api/admin/projects/${id}`, updatedFormData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Project updated successfully!");
      navigate('/admin/projects');
    } catch (error) {
      console.error("Update failed", error);
      toast.error("Update failed. Check console.");
    }
  };

  if (loading) {
    return (
      <div className="form_contianer div_top_change">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="form_contianer div_top_change">
      <h1>Update Project</h1>
      <form className='add-event' onSubmit={handleSubmit} encType="multipart/form-data">
        <input 
          name="title" 
          type="text" 
          placeholder="Project Title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
        />
        
        <input 
          name="link" 
          type="url" 
          placeholder="Project Link (https://example.com)" 
          value={formData.link} 
          onChange={handleChange} 
        />
        
        <textarea 
          name="description" 
          placeholder="Project Description" 
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
        
        {/* Show existing image preview */}
        {existingImage && !formData.img && (
          <div style={{ marginBottom: '10px' }}>
            <p style={{ fontSize: '14px', color: '#555' }}>Current project image:</p>
            <img 
              src={`${existingImage}?t=${new Date().getTime()}`} 
              alt="project" 
              style={{ 
                maxWidth: '300px', 
                maxHeight: '200px', 
                objectFit: 'cover', 
                borderRadius: '5px',
                border: '1px solid #ddd'
              }} 
            />
          </div>
        )}

        {/* File input */}
        <label className="custom-file-upload">
          <input 
            name="img" 
            type="file" 
            accept="image/*" 
            onChange={handleChange} 
          />
          {formData.img ? formData.img.name : "Choose new project image (optional)"}
        </label>

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default UpdateProject;