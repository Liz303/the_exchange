import styles from "./style.module.scss";

const ModalWrapper = ({ children, handleOpenClose, showModal }) => {
  return (
    <div className={`${styles.modalWrapper} ${showModal && styles.show}`}>
      <div className={styles.close} onClick={() => handleOpenClose(null)}>
        X
      </div>
      <div className={styles.scrollWrapper}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
