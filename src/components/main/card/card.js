import Bookmark from "../../images/icons8-lesezeichen-30.png";
import BookmarkAktive from "../../images/icons8-lesezeichen-30 (1).png";
import Tegform from "./tegsForm";

export default function Card({ question, answer }) {
  const tegs = [{ teg: "#when?" }, { teg: "#what?" }, { teg: "#why?" }];

  return (
    <li class="card-list__item">
      <article class="card" data-js="card">
        <h2 class="card__question">{question}</h2>
        <button
          class="card__button-answer"
          type="button"
          data-js="answer-button"
        >
          Show answer
        </button>
        <p class="card__answer" data-js="answer">
          {answer}
        </p>
        <ul class="card__tag-list">
          {tegs.map((teg) => {
            return <Tegform teg={teg.teg} />;
          })}
        </ul>

        <div class="card__button-bookmark">
          <button class="bookmark" data-js="bookmark-button">
            <img src={BookmarkAktive}></img>
            {/* <img src="https://img.icons8.com/sf-ultralight/40/000000/bookmark-ribbon.png" /> */}
          </button>
        </div>
      </article>
    </li>
  );
}
