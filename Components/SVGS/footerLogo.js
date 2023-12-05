import styles from "./footerLogo.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

const FooterLogo = () => {
  gsap.registerPlugin(ScrollTrigger);
  const logoRef = useRef();
  const cRef = useRef();
  const lRef = useRef();
  const gRef = useRef();
  const coRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
        start: "top 85%",
      },
    });
    tl.to(cRef.current, { opacity: 1, duration: 1 }, 0)
      .to(lRef.current, { opacity: 1, duration: 1 }, 0.15)
      .to(gRef.current, { opacity: 1, duration: 1 }, 0.3)
      .to(coRef.current, { opacity: 1, duration: 1 }, 1);
  }, [cRef, lRef, gRef, coRef, logoRef]);

  return (
    <div className={styles.footerLogoContainer} ref={logoRef}>
      <svg viewBox="0 0 1585 414" className={styles.logo}>
        <path
          className={styles.letter}
          ref={cRef}
          d="M207.513 134.719L214.455 195.421C214.675 197.344 216.322 198.761 218.255 198.728C321.885 196.926 405.581 113.353 407.591 9.76513C407.634 7.66702 405.954 5.94238 403.867 5.94238H214.839H196.519C87.9787 5.94238 0 93.9316 0 202.474V225.586H0.054918C2.60311 329.866 87.9128 413.615 192.784 413.615H214.828C320.029 413.615 405.548 329.349 407.58 224.619C407.624 222.521 405.943 220.796 403.856 220.796H214.828L207.513 284.838C207.008 289.243 200.616 289.243 200.11 284.838L194.388 234.758L193.125 223.751C192.927 222.027 191.565 220.676 189.852 220.478L128.761 213.491C124.356 212.986 124.356 206.593 128.761 206.088L189.852 199.101C191.576 198.903 192.927 197.541 193.125 195.828L200.11 134.73C200.616 130.325 207.008 130.325 207.513 134.73V134.719Z"
        />
        <path
          className={styles.letter}
          ref={lRef}
          d="M625.033 284.839L618.047 223.74C617.85 222.016 616.488 220.665 614.774 220.467L553.683 213.481C549.279 212.975 549.279 206.582 553.683 206.077L614.379 199.134C616.301 198.915 617.718 197.267 617.685 195.333C615.884 91.6908 532.32 7.98569 428.745 5.97545C426.647 5.93151 424.923 7.61221 424.923 9.69934V198.75V217.073C424.923 325.615 512.901 413.615 621.441 413.615H644.551V413.56C747.566 411.044 830.547 327.724 832.524 224.564C832.568 222.488 830.866 220.797 828.801 220.797H643.09C641.201 220.797 639.608 222.214 639.388 224.103L632.447 284.839C631.942 289.244 625.549 289.244 625.044 284.839H625.033Z"
        />
        <path
          className={styles.letter}
          ref={gRef}
          d="M1249.87 216.173H1067.43C1065.82 216.173 1064.45 217.381 1064.28 218.985L1057.36 279.512C1056.85 283.917 1050.46 283.917 1049.96 279.512L1042.97 218.414C1042.77 216.689 1041.41 215.338 1039.7 215.14L978.606 208.154C974.202 207.649 974.202 201.256 978.606 200.75L1039.7 193.764C1041.42 193.566 1042.77 192.204 1042.97 190.49L1044.23 179.483L1049.96 129.403C1050.46 124.998 1056.85 124.998 1057.36 129.403L1064.67 193.445H1253.7C1255.8 193.445 1257.47 191.721 1257.42 189.622C1255.39 84.8923 1169.87 0.626953 1064.67 0.626953H1042.63C937.758 0.626953 852.438 84.376 849.9 188.656H849.845V211.768C849.845 320.31 937.824 408.31 1046.36 408.31H1253.7C1255.79 408.31 1257.47 406.586 1257.42 404.499C1257.41 403.872 1257.39 403.235 1257.38 402.609H1257.47V223.786C1257.47 219.589 1254.06 216.184 1249.87 216.184V216.173Z"
        />
        <g className={styles.company} ref={coRef}>
          <path d="M1317.59 244.678C1317.59 230.573 1325.05 220.5 1339.22 220.5C1350.84 220.5 1358.02 227.75 1358.89 237.691H1350.83C1350.23 232.045 1346.54 227.75 1339.21 227.75C1329.61 227.75 1325.64 235.209 1325.64 244.678C1325.64 254.147 1329.61 261.54 1339.21 261.54C1346.26 261.54 1349.89 257.574 1350.9 252.005H1358.89C1357.75 261.671 1350.76 268.724 1339.22 268.724C1324.99 268.724 1317.59 258.585 1317.59 244.678Z" />
          <path d="M1367.9 221.104H1375.82V268.12H1367.9V221.104Z" />
          <path d="M1397.58 228.223H1383.41V221.104H1419.67V228.223H1405.51V268.12H1397.59V228.223H1397.58Z" />
          <path d="M1440.02 248.907L1422.83 221.775V221.104H1431.89L1443.9 241.119H1444.17L1455.99 221.104H1464.98V221.775L1447.92 248.841V268.12H1440.01V248.907H1440.02Z" />
          <path d="M1320.28 290.134H1328.14V330.031H1350.3V337.149H1320.28V290.134Z" />
          <path d="M1357.35 290.134H1389.05V297.252H1365.22V309.336H1386.98V316.454H1365.22V330.086H1389.05V337.139H1357.35V290.123V290.134Z" />
          <path d="M1398.31 290.134H1406.23V337.149H1398.31V290.134Z" />
          <path d="M1414.57 322.167H1422.56C1422.97 327.67 1426.86 330.691 1433.24 330.691C1440.29 330.691 1443.59 328.34 1443.59 323.979C1443.59 320.288 1441.04 318.476 1436.34 317.465L1429.48 315.982C1421.36 314.236 1416.12 310.611 1416.12 302.679C1416.12 294.748 1422.63 289.52 1433.31 289.52C1443.98 289.52 1450.84 295.429 1450.9 304.097H1442.91C1442.64 299.801 1439.69 296.638 1433.17 296.638C1427.33 296.638 1424.24 298.791 1424.24 302.679C1424.24 305.634 1426.4 307.513 1431.1 308.523L1437.48 309.864C1446.21 311.676 1451.71 315.773 1451.71 323.836C1451.71 331.899 1445.54 337.743 1433.25 337.743C1420.96 337.743 1414.99 331.57 1414.58 322.167H1414.57Z" />
          <path d="M1459.69 319.683V290.134H1467.54V319.551C1467.54 325.934 1470.63 330.635 1478.41 330.635C1486.2 330.635 1489.37 325.934 1489.37 319.551V290.134H1497.28V319.683C1497.28 331.371 1489.63 337.753 1478.41 337.753C1467.2 337.753 1459.68 331.371 1459.68 319.683H1459.69Z" />
          <path d="M1545.85 336.479V337.149H1536.92L1525.58 319.42H1516.18V337.149H1508.32V290.134H1528.2C1537.95 290.134 1543.58 296.648 1543.58 304.645C1543.58 311.499 1539.76 316.531 1533.85 318.475L1545.87 336.468L1545.85 336.479ZM1516.18 312.301H1527.73C1532.97 312.301 1535.45 309.149 1535.45 304.711C1535.45 300.273 1532.9 297.252 1527.73 297.252H1516.18V312.301Z" />
          <path d="M1553.3 290.134H1585V297.252H1561.17V309.336H1582.92V316.454H1561.17V330.086H1585V337.139H1553.3V290.123V290.134Z" />
          <path d="M1317.59 382.803C1317.59 368.699 1324.97 358.56 1339.08 358.56C1350.76 358.56 1357.95 365.546 1358.89 374.817H1350.83C1350.16 369.775 1346.47 365.821 1339.08 365.821C1329.48 365.821 1325.64 373.345 1325.64 382.814C1325.64 392.283 1329.47 399.599 1339.08 399.599C1347.14 399.599 1351.16 394.491 1351.57 388.186H1340.42V381.199H1359.48V385.703C1359.48 398.534 1351.57 406.794 1339.07 406.794C1324.83 406.794 1317.58 396.721 1317.58 382.814L1317.59 382.803Z" />
          <path d="M1406.03 405.498V406.168H1397.1L1385.76 388.438H1376.36V406.168H1368.5V359.152H1388.38C1398.12 359.152 1403.76 365.666 1403.76 373.663C1403.76 380.518 1399.94 385.549 1394.03 387.493L1406.04 405.487L1406.03 405.498ZM1376.36 381.32H1387.91C1393.15 381.32 1395.63 378.167 1395.63 373.729C1395.63 369.291 1393.08 366.271 1387.91 366.271H1376.36V381.32Z" />
          <path d="M1410.81 382.671C1410.81 369.171 1417.73 358.56 1432.5 358.56C1447.28 358.56 1454.2 369.171 1454.2 382.671C1454.2 396.172 1447.21 406.783 1432.5 406.783C1417.8 406.783 1410.81 396.106 1410.81 382.671ZM1446.13 382.671C1446.13 373.202 1442.23 365.81 1432.5 365.81C1422.77 365.81 1418.87 373.202 1418.87 382.671C1418.87 392.14 1422.77 399.533 1432.5 399.533C1442.23 399.533 1446.13 392.14 1446.13 382.671Z" />
          <path d="M1462.51 388.713V359.164H1470.36V388.582C1470.36 394.964 1473.45 399.665 1481.24 399.665C1489.03 399.665 1492.19 394.964 1492.19 388.582V359.164H1500.11V388.713C1500.11 400.401 1492.45 406.784 1481.24 406.784C1470.02 406.784 1462.5 400.401 1462.5 388.713H1462.51Z" />
          <path d="M1511.14 359.164H1530.2C1539.8 359.164 1545.71 365.546 1545.71 374.279C1545.71 383.012 1539.67 389.724 1530.2 389.724H1518.99V406.18H1511.14V359.164ZM1528.86 382.606C1534.51 382.606 1537.66 379.717 1537.66 374.279C1537.66 368.842 1534.3 366.216 1528.86 366.216H1518.99V382.606H1528.86Z" />
        </g>
      </svg>
    </div>
  );
};

export default FooterLogo;
