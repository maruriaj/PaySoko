import { useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductImg from "../components/ProductImg";
import ProductMain from "../components/ProductMain";
import { Context } from "../context/ProductContext";

function Product() {
  const { id } = useParams();
  const { search } = useLocation();
  const { products, loading, getProducts } = useContext(Context);
  const category = search.slice(3).replaceAll(":", " ").replaceAll(";", "'");
  useEffect(() => {
    getProducts(id);
  }, [id]);
  return (
    <>
      <ProductImg category={category} products={products} />
      <ProductMain products={products} loading={loading} category={category} />
    </>
  );
}

export default Product;
