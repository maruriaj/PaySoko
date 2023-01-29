import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../Requests';
import { FadeLoader } from 'react-spinners';
// import Shoe from '../assets/shoe.png';
// import Ankara from '../assets/ankara.png';
// import Bangle from '../assets/bangle.png';
// import Headphone from '../assets/headphone.png';
// import Watch from '../assets/watch.png';
// import Ring from '../assets/ring.png';
// import Shirt from '../assets/Bitmap.png';
// import Jacket from '../assets/Bitmap1.png';
// import Suit from '../assets/Bitmap3.png';
// import Wallet from '../assets/Bitmap4.png';
// import Shorts from '../assets/Bitmap2.png';

// const products = [
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shirt,
//     price: '1,500',
//     id: 1,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Jacket,
//     price: '1,500',
//     id: 2,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Suit,
//     price: '1,500',
//     id: 3,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Wallet,
//     price: '1,500',
//     id: 4,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shorts,
//     price: '1,500',
//     id: 5,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shorts,
//     price: '1,500',
//     id: 5,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shorts,
//     price: '1,500',
//     id: 5,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shorts,
//     price: '1,500',
//     id: 5,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shorts,
//     price: '1,500',
//     id: 5,
//   },
//   {
//     title: 'Ankara Shorts',
//     reviews: '(21 reviews)',
//     image: Shorts,
//     price: '1,500',
//     id: 5,
//   },
// ];

function Main() {
  const [products, setProducts] = useState([]);
  const [all, setAll] = useState(false);
  const [initial, setInitial] = useState(6);

  const handleAll = () => {
    setAll(true);
    setInitial(20);
  };
  const handleLess = () => {
    setAll(false);
    setInitial(6);
  };
  useEffect(() => {
    (async () => {
      const response = await fetchProducts(1);
      setProducts(response.data);
    })();
  }, []);

  return (
    <div className="px-5 mb-3">
      <div className="flex justify-between items-center">
        <p className="text-[#363431] font-medium text-base leading-5 tracking-wider">
          Popular Products
        </p>
        {all ? (
          <p
            className="text-[#03247C] text-xs tracking-wide cursor-pointer"
            onClick={handleLess}
          >
            See Less
          </p>
        ) : (
          <p
            className="text-[#03247C] text-xs tracking-wide cursor-pointer"
            onClick={handleAll}
          >
            See All
          </p>
        )}
      </div>
      {products.length > 2 ? (
        <div className="my-2 grid grid-cols-2 gap-4">
          {products?.slice(0, initial).map((product) => (
            <Card product={product} key={product.product_id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-3">
          <FadeLoader color="#3654d7" />
        </div>
      )}
      <div className="rounded-lg bg-gradient-to-r from-[#F79E7F] to-[#DE9C8D] p-4 my-6">
        <p className="text-[#03247C] font-semibold text-center text-base leading-5 tracking-wider">
          Enter your email and get the latest and best offers.Subscribe Now!
        </p>
        <div className="bg-white rounded-2xl flex justify-between items-center overflow-hidden my-4 px-3 py-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-1 outline-none placeholder:text-[#363431] placeholder:text-xs placeholder:leading-6 placeholder:font-medium"
          />
          <span className="text-[#03247C] text-xs font-bold">Subscribe</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
