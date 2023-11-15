"use client";
import BiosSection from "@/Components/BiosSection";
import ProjectsSection from "@/Components/ProjectsSection";
import NewsSection from "@/Components/NewsSection";

export const renderPageSections = (pageSections) => {
  return pageSections.map((section, i) => {
    if (section.sys.contentType) {
      const { id } = section.sys.contentType.sys;

      if (id === "news") {
        return <NewsSection section={section} key={`news-section-${i}`} />;
      }
      if (id === "projectsSection") {
        return (
          <ProjectsSection section={section} key={`projects-section-${i}`} />
        );
      }
      if (id == "biosSection") {
        return <BiosSection section={section} key={`bios-section-${i}`} />;
      }
    } else return "";
  });
};
