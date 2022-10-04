import "./Create.css";
import { useNavigate } from "react-router-dom";
function Create({ onCreate }) {
  const navigate = useNavigate();

  function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { question, answer, tag } = Object.fromEntries(formData);
    onCreate(question, answer, tag);
    navigate("/home");
  }

  return (
    <form className="form" onSubmit={sendForm}>
      <label htmlFor="question">Your question:</label>
      <textarea
        name="question"
        id="question"
        rows="7"
        data-js="question"
        maxLength="150"
      ></textarea>
      <label htmlFor="answer">Your answer:</label>
      <textarea
        name="answer"
        id="answer"
        rows="7"
        data-js="answer"
        maxLength="150"
      ></textarea>
      <label htmlFor="tag">Tag:</label>
      <input type="text" name="tag" id="tag" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Create;
