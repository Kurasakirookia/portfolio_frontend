import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/ManageSkills.css"
import { toast } from 'react-toastify';

const ManageExperience = () => {
  const [exp, setExps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/home/experiences') // Adjust URL if needed
      .then(res => {
        setExps(res.data.data || res.data); // Handle both response formats
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        await axios.delete(`/api/admin/experiences/${id}`);
        setExps(exp.filter(skill => skill._id !== id));
        toast.success("Skill deleted successfully!");
      } catch (error) {
        toast.error("Delete failed");
        console.error("Delete failed", error);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateExperience/${id}`);
  };

  return (
    <div className="manage_container">
      <div className="manage-events">
        <h2>Manage Experiences</h2>
        <table>
          <thead>
            <tr>
              <th id='admin_event_title' style={{color:'black'}}>Skill Name</th>
             
            </tr>
          </thead>
          <tbody>
            {exp && exp.map(experience => (
              <tr key={experience._id}>
                <td>{experience.companyName}</td>
                
                <td>
                  <button onClick={() => handleUpdate(experience._id)}>Update</button>
                  <button onClick={() => handleDelete(experience._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageExperience;