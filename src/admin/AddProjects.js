import React, { useState } from "react";
import axios from "axios";
import "../css/AddExperience.css"
import { toast } from "react-toastify";
const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    startDate: "",
    endDate: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      });

      const res = await axios.post("http://localhost:5000/api/admin/projects", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Project added:", res.data);
      toast.success("Project added successfully!");

      // reset form
      setFormData({
        title: "",
        link: "",
        description: "",
        startDate: "",
        endDate: "",
        img: null,
      });
    } catch (err) {
      console.error("Error adding project:", err);
      toast.error("Error adding project",err);
    }
  };

  return (
    <div className="form_contianer">
      <h1>Add Project</h1>
      <form
        className="add-event"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
          type="text"
          placeholder="Project Link (optional)"
          value={formData.link}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="startDate" className="textm">
          Start Date
        </label>
        <input
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />

        <label htmlFor="endDate" className="textm">
          End Date
        </label>
        <input
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
        />

        <label className="custom-file-upload">
          <input
            name="img"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {formData.img ? formData.img.name : "Choose Project Image"}
        </label>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
