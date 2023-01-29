import { Link } from 'react-router-dom';

import FashionIcon from '../assets/Iconcart.png';

function CategoryCard({ product }) {
  const url = product.name.replaceAll(' ', ':').replaceAll("'", ';');
  return (
    <Link to={`/product/${product?.id}?q=${url}`}>
      <div className="bg-[#E1E4F6] h-[120px] max-w-[118px] rounded-lg flex flex-col justify-center items-center gap-3">
        <div className="bg-[#F2F2F2] h-11 w-11 rounded-lg flex flex-col justify-center items-center">
          <img
            src={FashionIcon}
            alt="icon"
            className="h-6 w-6 text-[#9A9998]"
          />
        </div>
        <p className="text-[#363431] font-medium text-center text-xs leading-4">
          {product?.name.slice(0, 20)}
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;
