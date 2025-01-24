import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import tricou1 from "./assets/tricou1.webp";
import About from "./component/about";
import Login from "./component/login";

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="sub-container">
            <h2>Our products</h2>
            <div className="underline"></div>
          </div>
        </div>
        <div className="productss">
          <div className="products">
            <ul className="ul-2">
              <li className="li-2">
                <div className="img">
                  <img src={tricou1} />
                  <p>
                    Product : t-shirt
                    <br />
                    Price : 10$
                  </p>
                </div>
              </li>
              <li className="li-2">
                <img src={tricou1} />
                <p>
                  Product : t-shirt
                  <br />
                  Price : 10$
                </p>
              </li>
              <li className="li-2">
                <img src={tricou1} />
                <p>
                  Product : t-shirt
                  <br />
                  Price : 10$
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <header>
        <div className="header">
          <ul className="ul-1">
            <li className="li-1">
              <Link className="li-1" to="/">
                Home
              </Link>
            </li>
            <li className="li-1">
              <Link className="li-1" to="about">
                About
              </Link>
            </li>
            <li className="li-1">
              <Link className="li-1" to="login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <footer></footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
