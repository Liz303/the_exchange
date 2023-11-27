import styles from "./activeBio.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ImageRender from "../Images/ImageRender";
import PrimaryButton from "../Buttons/PrimaryButton";

const ActiveBio = ({ activeBio }) => {
  return (
    <div className={styles.modalContents}>
      <h3 className={styles.name}>{activeBio.fields.name}</h3>
      <h4 className={styles.position}>{activeBio.fields.position}</h4>
      {activeBio.fields.bioImage && (
        <div className={styles.bioImageContainer}>
          <ImageRender image={activeBio.fields.bioImage} cover={true} />
        </div>
      )}
      <div className={styles.bioContainer}>
        {activeBio.fields.email && (
          <div
            className={`${styles.emailWrapper} ${
              !activeBio.fields.link && styles.marginBottom
            }`}
          >
            <span>Email:</span>
            <PrimaryButton
              buttonTitle={activeBio.fields.email}
              link={`mailto:${activeBio.fields.email}`}
              color={"black"}
            />
          </div>
        )}
        {activeBio.fields.link && (
          <div className={styles.linkWrapper}>
            <span>Connect:</span>
            <PrimaryButton button={activeBio.fields.link} color={"black"} />
          </div>
        )}
        <div className={styles.bioCopy}>
          {documentToReactComponents(activeBio.fields.bio)}
        </div>
      </div>
    </div>
  );
};

export default ActiveBio;
