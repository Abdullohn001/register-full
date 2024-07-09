//components
import ProductsList from "../components/ProductsList";

//costun Fetch
import { customFetch } from "../utils";
//import react
import { useState } from "react";

//Loader
export const loader = async () => {
  const requset = await customFetch();
  const products = requset.data;

  return { products };
};

function Home() {
  const [withibleProduct, ] = useState();
  return (
    <div className="w-full bg-neutral ">
      <ProductsList withibleProduct={withibleProduct} />
      <div className="flex justify-center my-10">
        {" "}
        
      </div>
    </div>
  );
}

export default Home;
