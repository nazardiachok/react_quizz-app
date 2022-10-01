import FormInput from "./FormInput";
import { useState } from "react";
import "../components/main/card/card.css";
import { nanoid } from "nanoid";
import NewCard from "./newCard";

export default function CreateCard() {
  const [cards, setCards] = useState([]);

  function addCards(question, answer) {
    setCards([...cards, { id: nanoid(), question: question, answer: answer }]);
    console.log(nanoid());
  }
  function deleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }
  return (
    <>
      <FormInput onHandleSubmit={addCards} />
      <ul className="card-list">
        {cards.map((card) => (
          <NewCard
            id={card.id}
            key={card.key}
            question={card.question}
            answer={card.answer}
            deleteCard={deleteCard}
          />
        ))}
      </ul>
    </>
  );
}
