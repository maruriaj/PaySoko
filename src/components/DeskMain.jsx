import Chip from "../assets/chip.png";
import Flower from "../assets/flower.png";
import Boti from "../assets/boti.png";
import Perfume from "../assets/perfume.png";
import DeskCard from "./DeskCard";

const products = [
  { title: "Kev’s Frys Place", image: Chip, id: 1 },
  { title: "Sheila’s Flowers", image: Flower, id: 2 },
  { title: "Imran’s Boutique", image: Boti, id: 3 },
  { title: "Angela’s Perfumes", image: Perfume, id: 4 },
];
function DeskMain() {
  return (
    <div className="hidden my-3 md:mx-auto max-w-[80%]">
      <p className="text-[#363431] font-medium text-base leading-5 tracking-wider">
        Popular Businesses
      </p>
      <div className="my-3 md:grid gap-3 md:grid-cols-6">
        {products.map((product) => (
          <DeskCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default DeskMain;
