import { createContext, useState } from "react";
import { fetchProducts } from "../requests";

export const Context = createContext({});

function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  const [allProds, setAllProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async (id) => {
    try {
      setProducts([]);
      setAllProds([]);
      setLoading(true);
      const response = await fetchProducts(id);
      setProducts(response.data);
      setAllProds(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const filterProducts = (val) => {
    try {
      setLoading(true);
      const result = allProds.filter((product) =>
        product.name.toLowerCase().includes(val.toLowerCase())
      );
      setProducts(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{ products, loading, getProducts, filterProducts }}
    >
      {children}
    </Context.Provider>
  );
}

export default ProductContext;
