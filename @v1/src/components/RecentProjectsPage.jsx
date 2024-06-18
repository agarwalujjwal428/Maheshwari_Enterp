import React, { useState, useEffect } from "react";
import "../styles/RecentPage.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import recentData from "../RecentProject.json";
import { Link } from "react-router-dom";

const RecentProjectsPage = () => {
  const [activeProject, setActiveProject] = useState("Tile Adhesives");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const showProjectDetails = (projectId) => {
    setActiveProject(projectId);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <div className="rp-bg">
        <img src="/assets/images/5.jpg" alt="Recent Background" />
        <h2 className="rp-head">Recent Projects</h2>
      </div>
      <div className="rp-container">
        {sidebarVisible && (
          <div className="rp-sidebar">
            <div className="recent-cross-btn" onClick={toggleSidebar}>
              <RxCross2 />
            </div>

            <button
              onClick={() => showProjectDetails("Tile Adhesives")}
              className={activeProject === "Tile Adhesives" ? "btn-active" : ""}
              style={{ marginTop: "18px" }}
            >
              Tile Adhesives
            </button>
            <button
              onClick={() => showProjectDetails("WaterProofing Textures")}
              className={
                activeProject === "WaterProofing Textures" ? "btn-active" : ""
              }
            >
              WaterProofing Textures
            </button>
            <button
              onClick={() => showProjectDetails("Termite Treatment")}
              className={
                activeProject === "Termite Treatment" ? "btn-active" : ""
              }
            >
              Termite Treatment
            </button>
            <button
              onClick={() => showProjectDetails("Composite Plumbing")}
              className={
                activeProject === "Composite Plumbing" ? "btn-active" : ""
              }
            >
              Composite Plumbing
            </button>
          </div>
        )}

        <div className="rp-content">
          {!sidebarVisible && (
            <button onClick={toggleSidebar}>
              <IoReorderThreeOutline />
            </button>
          )}
          <div className="project-details">
            <h2>{activeProject}</h2>
            <div className="rp-project-details">
              {recentData[activeProject]?.map((item) => (
                <Link
                to={`/recentproject/${item.id}/${item.title}/${item.category}`}
                className="rp-item-card"
              >
                <div>
                  <img src={item.img}></img>
                  <p className="rp-pd-title">{item.title}</p>
                  <p className="rp-pd-desc">{item.description}</p>
                  <button className="rp-read-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <Link
                      to={`/recentproject/${item.id}/${item.title}/${item.category}`} 

                    >
                      <span className="read-btn-text">Read More</span>
                    </Link>
                  </button>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjectsPage;
