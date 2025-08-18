import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='admin_container'>
      <h1>Welcome, Admin 👋</h1>
      <p className='subtitle'>Manage Experiences, Skills, and Graphics from here.</p>
      <div className="admin_box">
      <div className='admin_cardContainer'>
        
        {/* Experience */}
        <div className='admin_card' onClick={() => navigate('/experiences/addExperience')}>
          ➕ Add Experience
        </div>
        <div className='admin_card' onClick={() => navigate('/admin/experiences')}>
          🗂 Manage Experiences
        </div>

        {/* Skills */}
        <div className='admin_card' onClick={() => navigate('/skills/addSkill')}>
          ➕ Add Skill
        </div>
        <div className='admin_card' onClick={() => navigate('/admin/skills')}>
          🎯 Manage Skills
        </div>

        {/* Graphics */}
        <div className='admin_card' onClick={() => navigate('/graphics/addGraphic')}>
          🖼 Add Graphic
        </div>
        <div className='admin_card' onClick={() => navigate('/admin/graphics')}>
          🖌 Manage Graphics
        </div>
        {/* Projects */}
         <div className='admin_card' onClick={() => navigate('/projects/addProject')}>
          🖼 Add Project
        </div>
        <div className='admin_card' onClick={() => navigate('/admin/projects')}>
          🖌 Manage Projects
        </div>

      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
