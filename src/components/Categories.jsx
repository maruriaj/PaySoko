import CategoryCard from "./CategoryCard";
import { useContext, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { CatContext } from "../context/CategoryContext";

function Categories() {
  const { categories, loading, getCategories } = useContext(CatContext);
  const [all, setAll] = useState(false);
  const [initial, setInitial] = useState(6);

  const handleAll = () => {
    setAll(true);
    setInitial(categories.length);
  };
  const handleCollapse = () => {
    setAll(false);
    setInitial(6);
  };
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);
  return (
    <div className="px-5 my-2">
      <div className="flex justify-between items-center">
        <p className="text-[#363431] text-base font-semibold leading-5">
          Category
        </p>
        {all ? (
          <p
            className="text-[#03247C] text-xs cursor-pointer"
            onClick={handleCollapse}
          >
            Collapse
          </p>
        ) : (
          <p
            className="text-[#03247C] text-xs cursor-pointer"
            onClick={handleAll}
          >
            See All
          </p>
        )}
      </div>
      {loading && (
        <div className="flex flex-col justify-center items-center my-3">
          <PuffLoader color="#36d7b7" />
        </div>
      )}
      {categories.length > 0 && (
        <div className="my-3 grid grid-cols-3 gap-3 md:grid-cols-6">
          {categories.slice(0, initial).map((cat) => (
            <CategoryCard key={cat.id} product={cat} />
          ))}
        </div>
      )}
      {categories.length === 0 && !loading && (
        <div className="my-3 flex flex-col justify-center items-center h-20">
          <p className="text-lg font-semibold text-center">
            No Products Found...
          </p>
        </div>
      )}
    </div>
  );
}

export default Categories;
