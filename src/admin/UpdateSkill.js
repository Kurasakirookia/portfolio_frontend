import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/AddExperience.css"
import "../css/Manage.css"
import { toast } from 'react-toastify';

const UpdateSkill = () => {
   const API_URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    skillName: "",
    tools: [
      { name: "", role: "", level: "", logoSrc: null }
    ],
  });

  const [existingTools, setExistingTools] = useState([]);

  useEffect(() => {
    axios.get(`/api/admin/skills/${id}`)
      .then(res => {
         console.log('Skill data received:', res.data);
        const skill = res.data;
        setFormData({
          skillName: skill.skillName,
          tools: skill.tools.map(tool => ({
            name: tool.name,
            role: tool.role,
            level: tool.level,
            logoSrc: null // don't prefill file input
          }))
        });
        // Store existing images for preview
        setExistingTools(skill.tools);
      })
      .catch(err =>{
         console.error("Failed to fetch skill:", err)
      
      console.error("Error details:", err.response);
        });
  }, [id]);

  const handleSkillChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToolChange = (index, e) => {
    const { name, value, files } = e.target;
    const newTools = [...formData.tools];

    if (name === "logoSrc") {
      newTools[index][name] = files[0];
    } else {
      newTools[index][name] = value;
    }

    setFormData({ ...formData, tools: newTools });
  };

  const addTool = () => {
    setFormData({
      ...formData,
      tools: [...formData.tools, { name: "", role: "", level: "", logoSrc: null }],
    });
    // Add empty existing tool for preview consistency
    setExistingTools([...existingTools, { logoSrc: null }]);
  };

  const removeTool = (index) => {
    const newTools = [...formData.tools];
    newTools.splice(index, 1);
    setFormData({ ...formData, tools: newTools });
    
    // Remove corresponding existing tool
    const newExistingTools = [...existingTools];
    newExistingTools.splice(index, 1);
    setExistingTools(newExistingTools);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const skillData = new FormData();
      skillData.append("skillName", formData.skillName);

      formData.tools.forEach((tool, index) => {
        skillData.append(`tools[${index}][name]`, tool.name);
        skillData.append(`tools[${index}][role]`, tool.role);
        skillData.append(`tools[${index}][level]`, tool.level);
        if (tool.logoSrc) {
          skillData.append(`tools[${index}][logoSrc]`, tool.logoSrc);
        }
      });

      await axios.put(`/api/admin/skills/${id}`, skillData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Skill updated successfully!");
      navigate('/admin/skills'); // Navigate back to manage skills
    } catch (err) {
      toast.error("Error updating skill!");
      console.error(err);
    }
  };

  return (
    <div className="form_contianer div_top_changes">
      <h1>Update Skill</h1>
      <form className="add-event" onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="skillName"
          type="text"
          placeholder="Skill Name"
          value={formData.skillName}
          onChange={handleSkillChange}
          required
        />
        
        <h1 style={{textAlign:'center'}}>Update Tools</h1>
        
        {formData.tools.map((tool, index) => (
          <div key={index} className="tool-section">
            <input
              name="name"
              type="text"
              placeholder="Tool Name"
              value={tool.name}
              onChange={(e) => handleToolChange(index, e)}
              required
            />
            <input
              name="role"
              type="text"
              placeholder="Role (frontend, backend, etc.)"
              value={tool.role}
              onChange={(e) => handleToolChange(index, e)}
            />
            <input
              name="level"
              type="text"
              placeholder="Level (basic, intermediate, strong)"
              value={tool.level}
              onChange={(e) => handleToolChange(index, e)}
            />
            
            {/* Show existing image preview */}
            {existingTools[index]?.logoSrc && !tool.logoSrc && (
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontSize: '14px', color: '#555' }}>Current logo:</p>
                
                <img 
                
                  src={`${API_URL}0${existingTools[index].logoSrc}?t=${new Date().getTime()}`} 
                  alt="tool logo" 
                  style={{ width: '100px', height: '100px', objectFit: 'contain', borderRadius: '5px' }} 
                />
              </div>
            )}
            
            <label className="custom-file-upload">
              <input
                name="logoSrc"
                type="file"
                accept="image/*"
                onChange={(e) => handleToolChange(index, e)}
              />
              {tool.logoSrc ? tool.logoSrc.name : "Choose new logo (optional)"}
            </label>
            
            <button type="button" onClick={() => removeTool(index)}>
              Remove Tool
            </button>
          </div>
        ))}

        <button type="button" onClick={addTool}>+ Add Tool</button>
        <button type="submit">Update Skill</button>
      </form>
    </div>
  );
};

export default UpdateSkill;