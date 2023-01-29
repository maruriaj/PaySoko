import { HiOutlineGift, HiOutlineShoppingBag } from 'react-icons/hi';
// import FashionIcon from '../assets/Iconcart.png';
// import GiftIcon from '../assets/Icongift.png';
// import ShoesIcon from '../assets/Iconshoe.png';
// import JewelIcon from '../assets/Icongift.png';
// import WatchIcon from '../assets/Iconwatch.png';
// import FunIcon from '../assets/furniture.png';
import CategoryCard from './CategoryCard';
import { fetchCategories } from '../Requests';
import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

// const productCategories = [
//   {
//     title: 'Fashion',
//     icon: FashionIcon,
//     id: 1,
//   },
//   {
//     title: 'Gift',
//     icon: GiftIcon,
//     id: 2,
//   },
//   {
//     title: 'Shoes',
//     icon: ShoesIcon,
//     id: 3,
//   },
//   {
//     title: 'Jewelry',
//     icon: JewelIcon,
//     id: 4,
//   },
//   {
//     title: 'Watch',
//     icon: WatchIcon,
//     id: 5,
//   },
//   {
//     title: 'Furniture',
//     icon: FunIcon,
//     id: 6,
//   },
// ];

function Categories() {
  // useEffect(() => {
  //   Axios.get(`http://api.paysoko.shop/api/v1/admin/categories`).then(
  //     (response) => CategoryCard(response.data)
  //   );
  // }, [Categories]);

  const [categories, setCategories] = useState([]);
  const [all, setAll] = useState(false);
  const [initial, setInitial] = useState(6);

  const handleAll = () => {
    setAll(true);
    setInitial(categories.length);
  };
  const handleLess = () => {
    setAll(false);
    setInitial(6);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchCategories();
      setCategories(response.data);
    })();
  }, []);
  return categories.length > 0 ? (
    <div className="px-5 my-2">
      <div className="flex justify-between items-center">
        <p className="text-[#363431] text-base font-semibold leading-5">
          Category
        </p>
        {all ? (
          <p
            className="text-[#03247C] text-xs cursor-pointer"
            onClick={handleLess}
          >
            See Less
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
      <div className="my-3 grid grid-cols-3 gap-3">
        {categories.slice(0, initial).map((cat) => (
          <CategoryCard key={cat.id} product={cat} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center my-3">
      <FadeLoader color="#3654d7" />
    </div>
  );
}

export default Categories;
