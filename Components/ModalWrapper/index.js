import styles from "./style.module.scss";

const ModalWrapper = ({ children, handleOpenClose, showModal }) => {
  return (
    <div className={`${styles.modalWrapper} ${showModal && styles.show}`}>
      <div className={styles.close} onClick={() => handleOpenClose(null)}>
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
