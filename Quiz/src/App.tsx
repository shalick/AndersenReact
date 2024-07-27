import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Start from "./components/Start/Start";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="container">
        <Start />
      </main>
      <Footer />
    </div>
  );
}

export default App;
