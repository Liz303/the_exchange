import styles from "./style.module.scss";

const OrderButton= ({ children }) => {
    return (
        <a href="#">
            <div className={styles.buttonContainer}>
                <button className="circle"> 
                   <span>
                     Order Now!
                   </span> 
                </button>
            </div>
        </a>
    )
}

export default OrderButton;