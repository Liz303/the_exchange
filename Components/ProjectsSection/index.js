import { Element } from "react-scroll";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";
import { gsap } from "gsap";
import Eyebrow from "../Eyebrow";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { SliderWrapper } from "../SliderWrapper";
import ImageRender from "../Images/ImageRender";
import ActiveProject from "./activeProject";
import MapSection from "./Map/mapSection";

const ProjectsSection = ({ projects }) => {
  const [activeProject, setActiveProject] = useState();
  const latLongList = [];

  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();
  const headlineRef = useRef();
  const copyRef = useRef();
  const projectsRef = useRef();
  projectsRef.current = [];
  const projectContainerRef = useRef();

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 60%",
        },
      });
    }
    if (copyRef) {
      gsap.to(copyRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          trigger: copyRef.current,
          start: "top 60%",
        },
      });
    }
    if (projectsRef) {
      gsap.to(projectsRef.current, {
        opacity: 1,
        duration: 0.8,
        x: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectContainerRef.current,
          start: "top 60%",
        },
      });
    }
  }, [
    headlineRef,
    copyRef,
    projectsRef,
    projectContainerRef,
    sectionRef,
    latLongList,
  ]);

  const handleOpenClose = (content) => {
    if (content) {
      ScrollTrigger.refresh();
    }
    setActiveProject(content);
  };

  const renderProjectCards = () => {
    return projects.map((project, i) => {
      const {
        primaryImage,
        shortDescription,
        titleOrLocation,
        secondaryImages,
        visitLink,
        location,
      } = project.fields;

      if (location) {
        latLongList.push(location);
      }

      return (
        <div
          className={styles.projectCard}
          onClick={() => handleOpenClose(project)}
          key={`project-card-${i}`}
          ref={addToRefs}
        >
          <ImageRender image={primaryImage} cover={true} />
          <div className={styles.projectTitle}>
            <span>This is:</span>
            <span>&nbsp;</span>
            <span> {titleOrLocation}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <Element name="projects" id="projects">
      {activeProject && (
        <ModalWrapper
          handleOpenClose={handleOpenClose}
          showModal={activeProject}
        >
          <ActiveProject activeProject={activeProject} />
        </ModalWrapper>
      )}

      <section className={styles.projectsSection} ref={sectionRef}>
        <div className={styles.eyebrowContainer}>
          <Eyebrow eyebrowCopy={"Our Projects"} color={"black"} />
        </div>
        <h3 className={styles.headline} ref={headlineRef}>
          Lorem ipsum dolor sit amet.
        </h3>
        <div className={styles.projectsCopy} ref={copyRef}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </p>
        </div>
        <div className={styles.projectCardsContainer} ref={projectContainerRef}>
          {projects && projects.length >= 3 ? (
            <SliderWrapper projects={true}>
              {renderProjectCards()}
            </SliderWrapper>
          ) : projects.length < 3 ? (
            <div className={styles.noSlider}>{renderProjectCards()}</div>
          ) : (
            ""
          )}
        </div>
      </section>
      <MapSection latLongList={latLongList} />
    </Element>
  );
};

export default ProjectsSection;
