import React from "react";

const ProjectItem = ({ projNum, title, desc, image, github, liveUrl }) => {
  return (
    <div className={`proj-${projNum}`}>
      <div className="img__container proj__img">
        <img src={image} alt={title} loading="lazy" />
        <div className="overlay">
          <p id="proj-title">{title}</p>
          <p id="proj-desc">{desc}</p>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live URL
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;