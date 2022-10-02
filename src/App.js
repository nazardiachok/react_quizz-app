import "./App.css";
import { useState } from "react";
import CardList from "./components/main/card-list/card-list";
import CreateCard from "./Form&newCard/CreateCard";
import BookmarkPage from "./components/main/bookmarkPage/bookmarkPage";
import ProfilePage from "./components/main/profilePage/profilePage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  const [activePage, setActivePage] =
    useState(
      "Home"
    ); /* wir denken uns die state "Home"(anfangsposition in useState) aus und jedes Mal beim click änderts sich activeState */
  return (
    <div className="App">
      <Header />
      <main>
        {activePage === "Home" && <CardList />}
        {activePage === "Bookmark" && <BookmarkPage />}
        {activePage === "CreateCard" && <CreateCard />}
        {activePage === "Profile" && <ProfilePage />}
      </main>

      <Footer activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
