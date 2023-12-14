import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";

const ModalWrapper = ({ children, handleOpenClose, showModal, isBio }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const body = document.body;

  useEffect(() => {
    if (showModal) {
      body.style.height = "100vh";
      body.style.overflow = "hidden";
      setTimeout(() => {
        setModalVisible(true);
      }, 500);
    }
  }, [showModal, body.style]);

  const handleToggle = () => {
    setModalVisible(false);
    body.style.height = "auto";
    body.style.overflow = "unset";
    setTimeout(() => {
      handleOpenClose(null);
    }, 500);
  };

  return (
    <div className={`${styles.modalWrapper} ${modalVisible && styles.show}`}>
      <div
        className={`${styles.close} ${isBio && styles.isBio}`}
        onClick={() => handleToggle()}
      >
        <svg viewBox="0 0 25 25">
          <path d="M0.799805 0.799805L24.2 24.2"></path>
          <path d="M0.799805 24.2L24.2 0.799805"></path>
        </svg>
      </div>
      <div className={styles.scrollWrapper}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
