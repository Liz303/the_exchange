import { Element } from "react-scroll";

const ProjectsSection = ({ section }) => {
  console.log("Projects Section:", section.fields);

  return (
    <Element name="projects" id="projects">
      <section>PROJECTS SECTION</section>
    </Element>
  );
};

export default ProjectsSection;
