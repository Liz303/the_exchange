import styles from "./style.module.scss";
import ImageRender from "../Images/ImageRender";
import introImage from "public/images/intro_image.jpg";

const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <h1>Your Passport For Adventure</h1>
      <div className={styles.imageContainer}>
        <ImageRender image={introImage} cover={true} />
      </div>
    </section>
  );
};

export default IntroSection;
