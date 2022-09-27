import "./form.css";

export default function FormInput() {
  return (
    <main>
      <form class="form" aria-label="Add a new question" data-js="form">
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
        <label for="tag">Tag:</label>
        <input id="tag" type="text" name="tag" />
        <button class="form__submit-button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
