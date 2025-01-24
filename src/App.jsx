import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import About from "./component/about";
import Login from "./component/login";
import Product from "./component/Product.jsx";

function Home() {
  return <></>;
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
              <Link className="li-1" to="product">
                Product
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
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
