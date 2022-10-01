import Tegform from "../components/main/card/tegsForm";
import { useState } from "react";
import "..//components/main/card/card.css";

export default function NewCard({ question, answer, id, deleteCard }) {
  const tegs = [{ teg: "#when?" }, { teg: "#what?" }, { teg: "#why?" }];
  const [showAnswer, setShowanswer] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  return (
    <li class="card-list__item">
      <article class="card" data-js="card">
        <h2 class="card__question">{question}</h2>
        <button
          onClick={() => setShowanswer(!showAnswer)}
          class="card__button-answer"
          type="button"
          data-js="answer-button"
        >
          {showAnswer ? "Hide answer" : "Show answer"}
        </button>
        <p
          class={`card__answer ${showAnswer ? "card__answer--active" : ""}`}
          data-js="answer"
        >
          {answer}
        </p>
        <ul class="card__tag-list">
          {tegs.map((teg) => {
            return <Tegform teg={teg.teg} />;
          })}
        </ul>

        <div class="card__button-bookmark">
          <button
            onClick={() => setActiveBookmark(!activeBookmark)}
            class={`bookmark ${activeBookmark ? "bookmark--active" : ""}`}
            aria-label="bookmark"
            type="button"
            data-js="bookmark-button"
          >
            <svg
              class="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </button>
        </div>
        <button onClick={() => deleteCard(id)} className="delete">
          Delete
        </button>
      </article>
    </li>
  );
}
