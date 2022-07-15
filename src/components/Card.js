import styles from "../styles/Card.module.css";
import cover from "../assets/img/cover.png";

const Card = ({ card, pickCard, selected }) => {
  const isFlipped = card.matched || selected;

  return (
    <div className={styles.cardDiv}>
      <img
        src={card.src}
        alt="card"
        className={
          isFlipped ? `${styles.flipped} ${styles.front}` : styles.front
        }
      />
      <img
        src={cover}
        alt="cover"
        className={isFlipped ? `${styles.flipped} ${styles.back}` : styles.back}
        onClick={() => pickCard(card)}
      />
    </div>
  );
};
export default Card;
