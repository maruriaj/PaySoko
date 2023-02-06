import BusinessCard from "./BusinessCard";
import Chip from "../assets/chip.png";
import Flower from "../assets/flower.png";
import Boti from "../assets/boti.png";
import Perfume from "../assets/perfume.png";
import Cat from "../assets/cat.png";
import Pods from "../assets/pods.png";

const products = [
  { title: "Kev’s Frys Place", image: Chip, id: 1 },
  { title: "Sheila’s Flowers", image: Flower, id: 2 },
  { title: "Imran’s Boutique", image: Boti, id: 3 },
  { title: "Angela’s Perfumes", image: Perfume, id: 4 },
];

function CategoryMain() {
  return (
    <div className="px-5 my-4">
      <h2 className="text-[#363431] font-semibold leading-5 text-base">
        Popular Businesses & Shops
      </h2>
      <div className="my-3 grid grid-cols-2 gap-3 md:grid-cols-6">
        {products.map((product) => (
          <BusinessCard key={product.id} product={product} />
        ))}
      </div>
      <div className="bg-black rounded-lg p-4 my-4 flex items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={Cat} alt="" />
            <p className="text-white font-semibold text-xs">Optimus Gadgets</p>
          </div>
          <p className="text-[#FFB001] font-semibold text-xs">Ksh. 25,000</p>
          <p className="text-white font-extrabold text-3xl leading-10">
            Airpods Pro
          </p>
          <button className="bg-[#FAFAFA] rounded-2xl font-medium text-xs mt-3 leading-6 py-1 px-3">
            SHOP NOW
          </button>
        </div>
        <img src={Pods} alt="" />
      </div>
    </div>
  );
}

export default CategoryMain;
