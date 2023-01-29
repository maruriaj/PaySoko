function Intro() {
  return (
    <>
      <div className="bg-[#C2EDA7] p-5 mt-4">
        {/* <div className="flex justify-center items-center">
        <img src={AboutImg} alt="about logo" className="" />
      </div> */}
        <p className="text-[#03247C] text-base font-semibold text-center leading-5 tracking-wider my-2">
          Why PaySoko for businesses?
        </p>
        <p className="text-[#363431] text-center text-xs font-medium leading-5 tracking-wide">
          Introduce your own payment solution for your customers and employees
          to use worldwide. Everything is possible, from card products all the
          way to digital banking and payment apps. We’re your specialists for
          issuing and technically integrating payment solutions. With us, you
          get everything from one source: modular end-to-end solutions, flexibly
          configurable white-label products.
        </p>
        <button className="bg-[#C2EDA7] border-[#03247C] rounded-2xl border w-full text-xs font-bold uppercase py-3 px-6 my-3">
          Sign up
        </button>
      </div>
      <div className="rounded-lg bg-gradient-to-r from-[#03247C] to-[#4D64A2] mx-4 p-4 my-7">
        <p className="text-white font-semibold text-center text-base leading-5 tracking-wider">
          To register your business, click on the Sign up button below.
        </p>
        <button className="bg-[#F79E7F] border-[#03247C] rounded-2xl w-full text-xs font-bold uppercase py-3 px-6 my-3">
          Sign up
        </button>
      </div>
    </>
  );
}

export default Intro;
