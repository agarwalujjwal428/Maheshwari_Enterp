import React, { useState } from 'react';
import '../styles/RecentPage.css';

function RecentProjectPage() {
  const [activeProject, setActiveProject] = useState(null);

  const showProjectDetails = (projectId) => {
    setActiveProject(projectId);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <button onClick={() => showProjectDetails('project1')}>Project 1</button>
        <button onClick={() => showProjectDetails('project2')}>Project 2</button>
        <button onClick={() => showProjectDetails('project3')}>Project 3</button>
        <button onClick={() => showProjectDetails('project4')}>Project 4</button>
      </div>

      <div className="content">
        {activeProject === 'project1' && (
          <div className="project-details">
            <h2>Project 1 Details</h2>
            <p>This is the details of Project 1.</p>
          </div>
        )}
        {activeProject === 'project2' && (
          <div className="project-details">
            <h2>Project 2 Details</h2>
            <p>This is the details of Project 2.</p>
          </div>
        )}
        {activeProject === 'project3' && (
          <div className="project-details">
            <h2>Project 3 Details</h2>
            <p>This is the details of Project 3.</p>
          </div>
        )}
        {activeProject === 'project4' && (
          <div className="project-details">
            <h2>Project 4 Details</h2>
            <p>This is the details of Project 4.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentProjectPage;
