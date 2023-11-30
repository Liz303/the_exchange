import styles from "./mapSection.module.scss";
import Star from "@/Components/SVGS/star";

const LocationPin = ({ text }) => (
  <div className={`pin ${styles.mapMarker}`}>
    <Star color={"blue"} />
  </div>
);

export default LocationPin;
