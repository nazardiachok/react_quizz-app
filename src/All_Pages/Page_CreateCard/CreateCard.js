import FormInput from "../Page_CreateCard/FormInput";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import "../../components/main/card/card.css";
import { nanoid } from "nanoid";
import NewCard from "./newCard";

export default function CreateCard() {
  const [cards, setCards] = useState([]);

  function addCards(question, answer) {
    setCards([...cards, { id: nanoid(), question: question, answer: answer }]);
  }
  return (
    <>
      <Header />
      <FormInput onHandleSubmit={addCards} />
      <ul className="card-list">
        {cards.map((card) => (
          <NewCard
            id={card.id}
            key={card.key}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </ul>
      <Footer />
    </>
  );
}
