import React from "react";
import "../styles/RecentPage.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image: "https://via.placeholder.com/150",
  },
];

const RecentProjectsPage = () => {
  return (
    <div>
      <h1 className="project-head">Recent Projects</h1>
      <div className="projectContainer">
        {projects.map((project) => (
          <div key={project.id} className="projectCard">
            <img src={project.image} alt={project.title} className="projectImage"/>
            <h2 className="projectTitle">{project.title}</h2>
            <p className="projectDescription">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default RecentProjectsPage;
