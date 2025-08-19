// AddSkill.js
import React, { useState } from "react";
import API from "../utils/api";
import { toast } from "react-toastify";
import "../css/AddSkill.css"
// import "../css/AddExperience.css"

const AddSkill = () => {
  const [formData, setFormData] = useState({
    skillName: "",
    tools: [
      { name: "", role: "", level: "", logoSrc: null }
    ],
  });

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
  };

  const removeTool = (index) => {
    const newTools = [...formData.tools];
    newTools.splice(index, 1);
    setFormData({ ...formData, tools: newTools });
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

      await API.post("/api/admin/skills", skillData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Skill added successfully!");
      setFormData({
        skillName: "",
        tools: [{ name: "", role: "", level: "", logoSrc: null }],
      });
    } catch (err) {
      toast.error("Error adding skill!");
      console.error(err);
    }
  };

  return (
    <div className="form_contianer">
      <h1>Add Skill</h1>
      <form className="add-event" onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="skillName"
          type="text"
          placeholder="Skill Name"
          value={formData.skillName}
          onChange={handleSkillChange}
          required
        />
        <h1 style={{textAlign:'center'}}>Add Tool</h1>
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
            <label className="custom-file-upload">
              <input
                name="logoSrc"
                type="file"
                accept="image/*"
                onChange={(e) => handleToolChange(index, e)}
              />
              {tool.logoSrc ? tool.logoSrc.name : "Choose Tool Logo"}
            </label>
            <button type="button" onClick={() => removeTool(index)}>
              Remove Tool
            </button>
          </div>
        ))}

        <button type="button" onClick={addTool}>+ Add Tool</button>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkill;
