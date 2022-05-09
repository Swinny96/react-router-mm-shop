import { Route, useParams, Routes } from "react-router-dom";

// nested routes
import Offers from "./Offers";

export default function Product() {
  const { id } = useParams();
  // const { path } = useRouteMatch()

  return (
    <main className="content">
      <div className="product">
        <div className="image">
          <img src="https://via.placeholder.com/520x460" alt="" />
        </div>
        <div className="details">
          <h2>I'am Product - {id}</h2>
        </div>
      </div>

      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>
    </main>
  );
}
