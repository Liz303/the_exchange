"use client";

import LogoElement from "../SVGs/LogoElement";
import s from "./style.module.scss";
const Header = () => {
  return (
      <div className={s.header}>
       <div className={s.logoIcon}>
        <LogoElement />
       </div>
       <div className={s.contactContainer}>
          <a className="no-link" href="mailto:justin@naturalobject.dev">
            <button className={s.contactButton}>
              <span> Contact </span>
            </button>
          </a>
        </div>
      </div>

  );
};

export default Header;
