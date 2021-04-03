import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./style.scss";

const ProjectItem = ({ projNum, title, desc, image, github, liveUrl }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const breakpoint = 769;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return width > breakpoint ? (
    <div className={`proj-${projNum}`}>
      <div className="img__container proj__img">
        <img src={image} alt={title} loading="lazy" />
        <div className="overlay">
          <p id="proj-title">{title}</p>
          <p id="proj-desc">{desc}</p>
          <div className="btn-container">
            <Button id="githubBtn">
              <a href={github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </Button>
            <Button id="liveUrlBtn">
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Live URL
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{desc}</Modal.Body>
        <Modal.Footer>
          <Button id="githubBtn" variant="warning" onClick={handleClose}>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </Button>
          <Button id="liveUrlBtn" variant="primary" onClick={handleClose}>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live URL
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={`proj-${projNum}`}>
        <div className="img__container proj__img">
          <img src={image} alt={title} loading="lazy" onClick={handleShow} />
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
