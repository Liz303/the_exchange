import { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-scroll";
import { useRef } from "react";
import Logo from "@/Components/SVGS/logo";

const Header = ({ changeHeader }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const navLinks = ["about", "projects", "team", "news", "connect"];

  const headerRef = useRef();
  const hamburgerRef = useRef();
  const headerContainer = useRef();
  const navs = useRef();
  navs.current = [];

  const addToRefs = (el) => {
    if (el && !navs.current.includes(el)) {
      navs.current.push(el);
    }
  };

  const toggleDrawer = () => {
    if (showDrawer) {
      setShowDrawer(false);
    } else {
      setShowDrawer(true);
    }
  };

  const renderNavLinks = () => {
    return navLinks.map((link, index) => {
      return (
        <div
          className={styles.navItem}
          ref={addToRefs}
          key={`nav-item-${index}`}
        >
          <Link
            activeClass="active"
            to={link}
            spy={true}
            offset={-75}
            smooth={true}
            duration={500}
            onClick={() => {
              toggleDrawer();
            }}
            className={styles.nav}
          >
            {link}
          </Link>
        </div>
      );
    });
  };

  return (
    <header
      className={`${styles.header} ${changeHeader && styles.invert}`}
      ref={headerRef}
    >
      <div
        className={`${styles.mobileNavigation} ${
          showDrawer ? `${styles.opened}` : `${styles.closed}`
        } `}
      >
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div
          className={styles.hamburger}
          ref={hamburgerRef}
          onClick={() => toggleDrawer()}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`${styles.drawer} ${
          showDrawer ? `${styles.opened}` : `${styles.closed}`
        }`}
      >
        <div className={styles.navContainerMobile}>{renderNavLinks()}</div>
      </div>
      <nav className={styles.headerContainer} ref={headerContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.navContainer}>{renderNavLinks()}</div>
      </nav>
    </header>
  );
};

export default Header;
