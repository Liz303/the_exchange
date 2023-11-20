import styles from "./style.module.scss";
import Star from "../SVGS/star";

const Eyebrow = ({ eyebrowCopy, color }) => {
  return (
    <div className={`eyebrow ${styles.eyebrow}`}>
      <div className={styles.starContainer}>
        <Star color={color} />
      </div>
      {eyebrowCopy}
    </div>
  );
};

export default Eyebrow;
