import React, { useEffect, useState } from 'react';
import API from "../utils/api";
import { useNavigate } from 'react-router-dom';
import "../css/ManageSkills.css"
import { toast } from 'react-toastify';

const ManageProjects = () => {
  const [projects ,setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('http://localhost:5000/api/home/projects') // Adjust URL if needed
      .then(res => {
        setProjects(res.data.data || res.data); // Handle both response formats
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        await API.delete(`http://localhost:5000/api/admin/projects/${id}`);
        setProjects(projects.filter(project => project._id !== id));
        toast.success("Skill deleted successfully!");
      } catch (error) {
        toast.error("Delete failed");
        console.error("Delete failed", error);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateProjects/${id}`);
  };

  return (
    <div className="manage_container">
      <div className="manage-events">
        <h2>Manage Projects </h2>
        <table>
          <thead>
            <tr>
              <th id='admin_event_title' style={{color:'black'}}>Projects Name</th>
             
            </tr>
          </thead>
          <tbody>
            {projects && projects.map(graphic => (
              <tr key={graphic._id}>
                <td>{graphic.title}</td>
                
                <td>
                  <button onClick={() => handleUpdate(graphic._id)}>Update</button>
                  <button onClick={() => handleDelete(graphic._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProjects;