import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>
        Created by{" "}
        <a
          href="https://github.com/Naithcots"
          target="_blank"
          className={styles.link}
        >
          @naithcots
        </a>
      </p>
    </footer>
  );
};
export default Footer;
