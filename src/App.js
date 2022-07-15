import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

import helmet from "./assets/img/helmet-1.png"
import potion from "./assets/img/potion-1.png"
import ring from "./assets/img/ring-1.png"
import scroll from "./assets/img/scroll-1.png"
import shield from "./assets/img/shield-1.png"
import sword from "./assets/img/sword-1.png"

const _cards = [
  { id: 0, src: helmet },
  { id: 1, src: potion },
  { id: 2, src: ring },
  { id: 3, src: scroll },
  { id: 4, src: shield },
  { id: 5, src: sword },
];

const App = () => {
  const [cards, setCards] = useState(null);

  const initializeCards = () => {
    const duplicatedCards = _cards.concat(_cards);
    const randomizedCards = duplicatedCards
      .map((card) => ({
        ...card,
        seed: Math.random(),
        matched: true,
      }))
      .sort((a, b) => a.seed - b.seed);
    setCards(randomizedCards);
  };

  useEffect(() => {
    initializeCards();
  }, []);

  return (
    <>
      <Header />
      <main>
        {!cards && <Spinner />}
        {cards && <CardContainer cards={cards} setCards={setCards} />}
      </main>
      <Footer />
    </>
  );
};

export default App;
