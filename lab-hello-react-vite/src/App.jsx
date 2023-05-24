// src/App.jsx
import "./App.css";
import ironhacklogo from "./assets/ironhacklogo.png";
import menu from "./assets/menu.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="container1">
        <header className="header">
          <div>
            <nav>
              <div className="logo">
                <img src={ironhacklogo} alt="logo"></img>
              </div>
              <div className="menu">
                <img src={menu} alt="menu" />
              </div>
            </nav>

            <div>
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn how to use the most popular frontend library, and
                become a super Ninja developer.
              </p>
            </div>

            <button>Awesome!</button>
          </div>
        </header>
      </div>

      <div className="container2">
        <footer className="footer">
          <article>
            <div>
              <img src={icon1} alt="icon1"></img>
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
            <img src={icon2} alt="icon2"></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
            <img src={icon3} alt="icon3"></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
            </div>
            <div>
            <img src={icon4} alt="icon4"></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </article>
        </footer>
      </div>
    </div>
  );
}

export default App;
