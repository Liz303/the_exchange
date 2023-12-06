import styles from "./logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link
        href="/"
        className="logo-hover"
        aria-label={"logo link to homepage"}
      >
        <svg viewBox="0 0 1593 521" className={styles.logo}>
          <path d="M262.884 169.172L271.678 245.749C271.956 248.174 274.043 249.961 276.492 249.92C407.774 247.647 513.802 142.219 516.348 11.5433C516.404 8.89651 514.275 6.72088 511.631 6.72088H272.165H248.956C111.454 6.72088 0 117.719 0 254.645V283.801H0.0695718C3.2977 415.35 111.371 521 244.225 521H272.151C405.423 521 513.76 414.699 516.334 282.582C516.39 279.935 514.261 277.759 511.617 277.759H272.151L262.884 358.549C262.244 364.105 254.146 364.105 253.506 358.549L246.256 295.372L244.656 281.487C244.406 279.312 242.68 277.607 240.51 277.358L163.118 268.544C157.538 267.907 157.538 259.842 163.118 259.204L240.51 250.391C242.694 250.142 244.406 248.423 244.656 246.261L253.506 169.186C254.146 163.629 262.244 163.629 262.884 169.186V169.172Z" />
          <path d="M791.811 358.549L782.961 281.473C782.711 279.298 780.986 277.593 778.815 277.344L701.423 268.53C695.844 267.893 695.844 259.828 701.423 259.19L778.314 250.433C780.749 250.155 782.544 248.077 782.502 245.638C780.22 114.892 674.36 9.29837 543.147 6.76245C540.49 6.70702 538.305 8.82722 538.305 11.4601V249.948V273.062C538.305 409.988 649.759 521 787.261 521H816.537V520.931C947.04 517.757 1052.16 412.648 1054.67 282.513C1054.72 279.894 1052.57 277.759 1049.95 277.759H814.686C812.293 277.759 810.275 279.547 809.997 281.931L801.203 358.549C800.563 364.106 792.465 364.106 791.825 358.549H791.811Z" />
          <path d="M1583.37 271.926H1352.25C1350.21 271.926 1348.48 273.45 1348.26 275.473L1339.49 351.828C1338.85 357.385 1330.76 357.385 1330.12 351.828L1321.27 274.752C1321.02 272.577 1319.29 270.872 1317.12 270.623L1239.73 261.81C1234.15 261.172 1234.15 253.107 1239.73 252.47L1317.12 243.656C1319.3 243.407 1321.02 241.688 1321.27 239.527L1322.87 225.641L1330.12 162.465C1330.76 156.908 1338.85 156.908 1339.49 162.465L1348.76 243.254H1588.23C1590.89 243.254 1593 241.079 1592.94 238.432C1590.37 106.315 1482.03 0.0138588 1348.76 0.0138588H1320.84C1187.98 0.0138588 1079.89 105.663 1076.68 237.212H1076.61V266.369C1076.61 403.294 1188.06 514.307 1325.57 514.307H1588.23C1590.87 514.307 1593 512.131 1592.94 509.498C1592.93 508.708 1592.9 507.905 1592.89 507.115H1593V281.529C1593 276.235 1588.69 271.939 1583.37 271.939V271.926Z" />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
