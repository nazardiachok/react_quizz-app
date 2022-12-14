import Card from "../components/card/Card";
import "./Cards.css";

function Cards({ cards, onDelete, onBookmark, NavigateCard }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          answer={card.answer}
          tags={card.tags}
          bookmarked={card.bookmarked}
          onDelete={() => onDelete(card.id)}
          onBookmark={() => onBookmark(card.id)}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
