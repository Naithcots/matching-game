import { useEffect, useRef, useState } from "react";
import styles from "../styles/CardContainer.module.css";
import Card from "./Card";

const CardContainer = ({ cards, setCards }) => {
  // Setup
  const flipDuration = 300;
  const initialUncoverDuration = 2000;
  const notMatchedDuration = flipDuration * 4;
  // Setup

  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [pickBlocked, setPickBlocked] = useState(true);
  const ref = useRef();

  const pickCard = (card) =>
    !pickBlocked && (card1 ? setCard2(card) : setCard1(card));

  const compareCards = () => {
    if (card1.id === card2.id) {
      setCards((cards) =>
        cards.map((card) => {
          if (card.seed === card1.seed || card.seed === card2.seed) {
            return { ...card, matched: true };
          } else return card;
        })
      );
    }
  };

  const coverCards = () =>
    setCards((cards) => cards.map((card) => ({ ...card, matched: false })));

  useEffect(() => {
    ref &&
      ref.current &&
      ref.current.style.setProperty("--flip-duration", flipDuration + "ms");

    // Show uncovered cards at the start of the round
    setTimeout(() => {
      coverCards();
      setPickBlocked(false);
    }, initialUncoverDuration);
  }, []);

  useEffect(() => {
    // Block new card pick until transition ends
    setPickBlocked(true);

    if (card1 && card2) {
      compareCards();
      setTimeout(() => {
        setCard1(null);
        setCard2(null);
        setPickBlocked(false);
      }, notMatchedDuration);
    } else {
      setTimeout(() => {
        setPickBlocked(false);
      }, flipDuration);
    }
  }, [card1, card2]);

  return (
    <div className={styles.cardContainer} ref={ref}>
      {cards.map((card) => (
        <Card
          card={card}
          pickCard={pickCard}
          selected={card.seed === card1?.seed || card.seed === card2?.seed}
          key={card.seed}
        />
      ))}
    </div>
  );
};
export default CardContainer;
