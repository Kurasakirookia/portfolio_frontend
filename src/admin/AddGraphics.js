import React, { useState } from "react";
import API from "../utils/api";
import { toast } from "react-toastify";
import "../css/AddExperience.css";

const AddGraphic = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    imageSrc: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageSrc") {
      setFormData({ ...formData, imageSrc: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const graphicData = new FormData();
      for (let key in formData) {
        graphicData.append(key, formData[key]);
      }

      await API.post("/api/admin/graphics", graphicData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Graphic added successfully!");
      setFormData({
        name: "",
        category: "",
        imageSrc: null,
      });
    } catch (err) {
      toast.error("Error adding graphic!");
      console.error(err);
    }
  };

  return (
    <div className="form_contianer">
      <h1>Add Graphic</h1>
      <form className="add-event" onSubmit={handleSubmit} encType="multipart/form-data">

        <input
          name="name"
          type="text"
          placeholder="Graphic Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          type="text"
          placeholder="Category (optional)"
          value={formData.category}
          onChange={handleChange}
        />

        <label className="custom-file-upload">
          <input
            name="imageSrc"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
          />
          {formData.imageSrc ? formData.imageSrc.name : "Choose Graphic Image"}
        </label>

        <button type="submit">Add Graphic</button>
      </form>
    </div>
  );
};

export default AddGraphic;
