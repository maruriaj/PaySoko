import React, { useState, createContext } from "react";
import { fetchCategories } from "../Requests";

export const CatContext = createContext({});
function CategoryContext({ children }) {
  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async (id) => {
    try {
      setCategory([]);
      setLoading(true);
      const response = await fetchCategories();
      setCategory(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <CatContext.Provider value={{ categories, loading, getCategories }}>
      {children}
    </CatContext.Provider>
  );
}

export default CategoryContext;
