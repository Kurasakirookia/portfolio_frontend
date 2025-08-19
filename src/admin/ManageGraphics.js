import React, { useEffect, useState } from 'react';
import API from "../utils/api";
import { useNavigate } from 'react-router-dom';
import "../css/ManageSkills.css"
import { toast } from 'react-toastify';

const ManageGraphics = () => {
  const [graphics, setGraphics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/api/home/graphics') // Adjust URL if needed
      .then(res => {
        setGraphics(res.data.data || res.data); // Handle both response formats
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      try {
        await API.delete(`/api/admin/graphics/${id}`);
        setGraphics(graphics.filter(graphic => graphic._id !== id));
        toast.success("Skill deleted successfully!");
      } catch (error) {
        toast.error("Delete failed");
        console.error("Delete failed", error);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateGraphics/${id}`);
  };

  return (
    <div className="manage_container">
      <div className="manage-events">
        <h2>Manage Graphics</h2>
        <table>
          <thead>
            <tr>
              <th id='admin_event_title' style={{color:'black'}}>Graphic Name</th>
             
            </tr>
          </thead>
          <tbody>
            {graphics && graphics.map(graphic => (
              <tr key={graphic._id}>
                <td>{graphic.name}</td>
                
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

export default ManageGraphics;