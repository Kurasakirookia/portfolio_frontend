import React, { useEffect, useState } from 'react';
import API from "../utils/api";
import { useNavigate } from 'react-router-dom';
import "../css/ManageSkills.css"
import { toast } from 'react-toastify';

const ManageSkills = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/api/home/skills') // Adjust URL if needed
      .then(res => {
        setSkills(res.data.data || res.data); // Handle both response formats
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        await API.delete(`/api/admin/skills/${id}`);
        setSkills(skills.filter(skill => skill._id !== id));
        toast.success("Skill deleted successfully!");
      } catch (error) {
        toast.error("Delete failed");
        console.error("Delete failed", error);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateSkills/${id}`);
  };

  return (
    <div className="manage_container">
      <div className="manage-events">
        <h2>Manage Skills</h2>
        <table>
          <thead>
            <tr>
              <th id='admin_event_title' style={{color:'black'}}>Skill Name</th>
              <th style={{color:'black'}}>Tools Count</th>
              <th style={{color:'black'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills && skills.map(skill => (
              <tr key={skill._id}>
                <td>{skill.skillName}</td>
                <td>{skill.tools ? skill.tools.length : 0}</td>
                <td>
                  <button onClick={() => handleUpdate(skill._id)}>Update</button>
                  <button onClick={() => handleDelete(skill._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSkills;