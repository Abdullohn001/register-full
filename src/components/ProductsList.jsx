//rrd import
import { useLoaderData } from "react-router-dom";
//components
import Product from "./Product";

function ProductsList({ withibleProduct }) {
  const {
    products: { products },
  } = useLoaderData();

  return (
    <div className="grid ">
      {products.slice(0, withibleProduct).map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
