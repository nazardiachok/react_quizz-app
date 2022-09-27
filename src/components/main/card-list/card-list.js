import Card from "../card/card";
import "./card-list.css";

export default function CardList() {
  const cards = [
    {
      question: "Wann wurde die Republik Deutschland gegründet?",
      answer: "1949",
      id: 1,
    },
    { question: "Was ist React?", answer: "React ist...", id: 2 },
    {
      question: "Warum nutzen wir props?",
      answer: "Props sind gut für...",
      id: 1,
    },
  ];
  return (
    <ul className="card-list">
      {cards.map((card) => {
        return <Card question={card.question} answer={card.answer} />;
      })}
    </ul>
  );
}
