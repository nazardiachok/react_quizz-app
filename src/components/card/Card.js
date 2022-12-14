import { useState } from "react";
import "./Card.css";

function Card({ question, answer, tags, bookmarked, onDelete, onBookmark }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="card">
      <h2>{question}</h2>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="card__button-answer"
        type="button"
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>
      {showAnswer && (
        <p className="card__answer card__answer--active">{answer}</p>
      )}

      <ul className="card__tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="card__tag-list-item">
            #{tag}
          </li>
        ))}
      </ul>
      <div className="card__button-bookmark">
        <button
          className={`card__bookmark${
            bookmarked ? " card__bookmark--active" : ""
          }`}
          aria-label="bookmark"
          type="button"
          onClick={onBookmark}
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
      <div>
        <button
          className="delete"
          aria-label="delete"
          type="button"
          onClick={onDelete}
        >
          <svg className="card__trashcan-icon" viewBox="0 0 24 24">
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Card;
