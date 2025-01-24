import React from "react";
import "../App.css";
import tricou1 from "../assets/tricou1.webp";

function Products() {
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

export default Products;
