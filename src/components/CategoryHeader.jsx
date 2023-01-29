import Cat from "../assets/cat.png";
import CateBg from "../assets/cateBg.jpg";

function CategoryHeader() {
  return (
    <div className="pt-20 px-5">
      <h2 className="text-[#03247C] font-extrabold text-base">
        Search Businesses and Shops
      </h2>
      <div
        className="p-4 my-4 h-[167px] rounded-lg bg-cover"
        style={{ backgroundImage: `url(${CateBg})` }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex gap-2 items-center">
            <img src={Cat} alt="logo" />
            <p className="text-white text-xs font-semibold">Bob’s Gear</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-xs">500 Products</p>
              <p className="text-white text-xs font-bold">
                30% off all hiking boots
              </p>
            </div>
            <button className="text-[#363431] px-6 py-1 text-xs font-medium leading-6 bg-[#FAFAFA] rounded-2xl">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;
