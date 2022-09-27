import "./App.css";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import CardList from "./components/main/card-list/card-list";
import Form from "./Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Form /> */}
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
