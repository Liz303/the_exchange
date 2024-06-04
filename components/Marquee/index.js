import Marquee from "react-fast-marquee";
import styles from "./style.module.scss";

export default function FooteraMarquee() {
    return (
        <div className={styles.headerMarquee}>
            <Marquee>
            <h2>
                HEY! I'M GRILLIN' HERE. HOME OF THE $3.80 BURGER &nbsp;
            </h2>
            </Marquee>
      </div>
    )
}