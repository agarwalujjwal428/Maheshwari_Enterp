import React, { useState } from "react";
import "../styles/RecentPage.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import recentData from "../RecentProject.json";

const RecentProjectsPage = () => {
  const [activeProject, setActiveProject] = useState("Tile Adhesives");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const showProjectDetails = (projectId) => {
    setActiveProject(projectId);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="rp-bg">
        <img src="/src/assets/images/5.jpg" alt="Recent Background" />
        <h2 className="rp-head">Recent Projects/</h2>
      </div>
      <div className="rp-container">
        {sidebarVisible && (
          <div className="rp-sidebar">
{/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
            <button
              onClick={() => showProjectDetails("Tile Adhesives")}
              className={activeProject === "Tile Adhesives" ? "btn-active" : ""}
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
          <button onClick={toggleSidebar}>
            {sidebarVisible ? <RxCross2 /> : <IoReorderThreeOutline />}
          </button>
          {activeProject === "Tile Adhesives" && (
            <div className="project-details">
              <h2>Tile Adhesives</h2>
              {recentData["Tile Adheshives"].map((item) => (
                <>
                  <img
                    src={item.img}
                    style={{ height: "200px", width: "200px" }}
                    ></img>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </>
              ))}
            </div>
          )}
          {activeProject === "WaterProofing Textures" && (
            <div className="project-details">
              <h2>WaterProofing Textures</h2>
              {recentData["WaterProofing"].map((item) => (
                <>
                  <img
                    src={item.img}
                    style={{ height: "200px", width: "200px" }}
                    ></img>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </>
              ))}
            </div>
          )}
          {activeProject === "Termite Treatment" && (
            <div className="project-details">
              <h2>Termite Treatement</h2>
              {recentData["Termites"].map((item) => (
                <>
                  <img
                    src={item.img}
                    style={{ height: "200px", width: "200px" }}
                    ></img>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </>
              ))}
            </div>
          )}
          {activeProject === "Composite Plumbing" && (
            <div className="project-details">
              <h2>Composite Plumbing</h2>
              {recentData["Composite Plumbing"].map((item) => (
                <>
                  <img
                    src={item.img}
                    style={{ height: "200px", width: "200px" }}
                    ></img>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </>
              ))}

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentProjectsPage;
