import "./form.css";
import NewCard from "./newCard";

export default function FormInput({ onHandleSubmit }) {
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { question } = form.elements;
    const { answer } = form.elements;
    onHandleSubmit(question.value, answer.value);
    console.log(form.elements);
    form.reset();
  }

  return (
    <main>
      <form
        onSubmit={onSubmit}
        class="form"
        aria-label="Add a new question"
        data-js="form"
      >
        <label for="question">Your question:</label>
        <textarea
          id="question"
          rows="7"
          name="question"
          maxlength="150"
          data-js="input-question"
          placeholder=""
        ></textarea>
        <span class="form__character-count">
          <span data-js="amount-left-question"></span> characters left
        </span>
        <label for="answer">Your answer:</label>
        <textarea
          id="answer"
          rows="7"
          name="answer"
          maxlength="150"
          data-js="input-answer"
        ></textarea>
        <span class="form__character-count">
          <span data-js="amount-left-answer"></span> characters left
        </span>
        <label for="teg">Tag:</label>
        <input id="teg" type="text" name="teg" />
        <button class="form__submit-button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
