import { Element } from "react-scroll";
import styles from "./style.module.scss";
import { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import { gsap } from "gsap";
import Eyebrow from "../Eyebrow";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

const ProjectsSection = ({ projects }) => {
  const [activeProject, setActiveProject] = useState();
  const [showModal, setShowModal] = useState();
  gsap.registerPlugin(ScrollTrigger);

  const handleOpenClose = (project) => {
    if (project === null) {
      setShowModal(false);
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      ScrollTrigger.refresh();
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      setTimeout(() => {
        setActiveProject(null);
      }, 500);
    } else {
      setActiveProject(project);
      const body = document.body;
      body.style.top = `-${window.pageYOffset}px`;
      body.style.position = "fixed";
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  };

  const renderProjectCards = () => {
    return projects.map((project, i) => {
      const {
        primaryImage,
        shortDescription,
        titleOrLocation,
        secondaryImages,
        visitLink,
      } = project.fields;

      return (
        <div onClick={() => handleOpenClose(project)}>
          <h5>{titleOrLocation}</h5>
          <span>{shortDescription}</span>
        </div>
      );
    });
  };

  return (
    <Element name="projects" id="projects">
      {activeProject && (
        <ModalWrapper handleOpenClose={handleOpenClose} showModal={showModal}>
          <div className={styles.modalContents}>
            <h5>{activeProject.fields.titleOrLocation}</h5>
            <span>{activeProject.fields.shortDescription}</span>
          </div>
        </ModalWrapper>
      )}

      <section>
        <Eyebrow eyebrowCopy={"Our Projects"} color={"black"} />
        <h2>Projects Section</h2>
        {renderProjectCards()}
      </section>
    </Element>
  );
};

export default ProjectsSection;
