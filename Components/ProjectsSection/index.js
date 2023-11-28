import { Element } from "react-scroll";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import ModalWrapper from "../ModalWrapper";
import { gsap } from "gsap";
import Eyebrow from "../Eyebrow";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { SliderWrapper } from "../SliderWrapper";
import ImageRender from "../Images/ImageRender";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PrimaryButton from "../Buttons/PrimaryButton";

const ProjectsSection = ({ projects }) => {
  const [activeProject, setActiveProject] = useState();
  const [showModal, setShowModal] = useState();
  gsap.registerPlugin(ScrollTrigger);
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
    if (headlineRef) {
      gsap.to(headlineRef.current, {
        opacity: 1,
        duration: 1,
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
        delay: 0.5,
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
          start: "top 50%",
        },
      });
    }
  }, [headlineRef, copyRef]);

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
        <ModalWrapper handleOpenClose={handleOpenClose} showModal={showModal}>
          <div className={styles.modalContents}>
            <div className={styles.detailsBanner}>
              <h2 className={styles.projectTitle}>
                <span>This is:</span>
                <span>&nbsp;</span>
                <span>{activeProject.fields.titleOrLocation}</span>
              </h2>
              <div className={styles.buttonCopyContainer}>
                <div className={`buttons-container ${styles.buttonsContainer}`}>
                  {activeProject.fields.visitLink && (
                    <PrimaryButton
                      link={activeProject.fields.visitLink}
                      buttonTitle={"See More"}
                    />
                  )}
                </div>
                <div className={styles.projectDescription}>
                  {documentToReactComponents(
                    activeProject.fields.shortDescription
                  )}
                </div>
              </div>
            </div>
            <div className={styles.primaryImage}>
              <ImageRender
                image={activeProject.fields.primaryImage}
                cover={true}
              />
            </div>
            {activeProject.fields.secondaryImages && (
              <div className={styles.imagesContainer}>
                {activeProject.fields.secondaryImages.map((image, i) => {
                  return (
                    <div
                      className={styles.secondaryImage}
                      key={`secondary-image-${i}`}
                    >
                      <ImageRender image={image} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </ModalWrapper>
      )}

      <section className={styles.projectsSection}>
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
          <SliderWrapper projects={true}>{renderProjectCards()}</SliderWrapper>
        </div>
      </section>
    </Element>
  );
};

export default ProjectsSection;
