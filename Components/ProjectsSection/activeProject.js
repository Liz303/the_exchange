import styles from "./activeProject.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import PrimaryButton from "../Buttons/PrimaryButton";
import ImageRender from "../Images/ImageRender";

const ActiveProject = ({ activeProject }) => {
  return (
    <div className={styles.modalContents}>
      <div className={styles.detailsBanner}>
        <h2 className={styles.projectTitle}>
          This is:
          <span>&nbsp;{activeProject.fields.titleOrLocation}</span>
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
            {documentToReactComponents(activeProject.fields.shortDescription)}
          </div>
        </div>
      </div>
      <div className={styles.primaryImage}>
        <ImageRender image={activeProject.fields.primaryImage} cover={true} />
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
  );
};

export default ActiveProject;
