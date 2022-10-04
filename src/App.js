import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";

const myCards = [
  {
    id: nanoid(),
    question: "Wann wurde die Republik Deutschland gegründet?",
    answer: "1949",
    tags: ["when?", "how?", "why?"],
    bookmarked: true,
  },
  {
    id: nanoid(),
    question: "Was ist React?",
    answer: "React ist...",
    tags: ["when?", "how?", "why?"],
    bookmarked: false,
  },
  {
    id: nanoid(),
    question: "Warum nutzen wir props?",
    answer: "Props sind gut für...",
    tags: ["when?", "how?", "why?"],
    bookmarked: true,
  },
];

function App() {
  const [cards, setCards] = useState(myCards);

  function appendCard(question, answer, tag) {
    setCards([
      ...cards,
      {
        question,
        answer,
        tags: [tag],
        id: nanoid(),
        bookmarked: false,
      },
    ]);
  }

  function deleteCard(cardId) {
    setCards(cards.filter(({ id }) => cardId !== id));
  }

  function toggleBookmark(cardId) {
    setCards(
      cards.map((card) => ({
        ...card,
        bookmarked: cardId === card.id ? !card.bookmarked : card.bookmarked,
      }))
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route
            path="/home"
            element={
              <Cards
                cards={cards}
                onDelete={deleteCard}
                onBookmark={toggleBookmark}
              />
            }
          ></Route>
          <Route
            path="/bookmarked"
            element={
              <Cards
                cards={cards.filter((card) => card.bookmarked)}
                onDelete={deleteCard}
                onBookmark={toggleBookmark}
              />
            }
          ></Route>
          <Route
            path="/create"
            element={<Create onCreate={appendCard} />}
          ></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* <Route path="*" element={<h1> Seite existiert nicht,du</h1>}></Route> */}
        </Routes>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
