import styles from "../styles/Spinner.module.css";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <FaSpinner className={styles.spinner} />
    </div>
  );
};
export default Spinner;
