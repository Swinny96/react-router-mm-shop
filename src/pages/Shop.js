import { Link } from "react-router-dom";
import "../components/product.css";
import ProductList from "./ProductList";

export default function Shop() {
  return (
    <main className="content">
      {/*       <h3>Hoodies</h3>
      <div className="products">
        {[0, 1, 2, 3].map((p) => (
          <div key={p}>
            <Link to={`/shop/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Tees</h3>
      <div className="products">
        {[4, 5, 6, 7].map((p) => (
          <div key={p}>
            <Link to={`/shop/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Sneakers</h3>
      <div className="products">
        {[8, 9, 10, 11].map((p) => (
          <div key={p}>
            <Link to={`/shop/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div> */}
      <ul className="Device-Group">
        {ProductList.map(
          ({ id, image, productname, page, color, storage, price }) => {
            return (
              <li class="Device" key={id}>
                <Link to={`/shop/${id}`}>
                  <div class="Device-Contents">
                    <img class="Device-Product" src={image} alt={productname} />
                    <Link to={`/shop/${id}`}>
                      <h4>{productname}</h4>
                    </Link>
                    <div class="Memory">
                      <div class="Storage">
                        <span>{storage}</span>
                      </div>
                    </div>
                    <div class="Color-Grid">
                      <div class={`color ${color}`}>
                        <span class="tooltiptext">{color}</span>
                      </div>
                    </div>
                    <div class="Memory">
                      <strong class="Available">Available from</strong>
                      <strong class="Price">£{price}</strong>
                    </div>
                    <div class="Buttons">
                      <Link class="Device-Button" to="/shop">
                        + Compare
                      </Link>
                    </div>
                  </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
}
