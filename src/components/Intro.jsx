function Intro() {
  return (
    <>
      <div className="bg-[#C2EDA7] p-5 mt-4 flex flex-col justify-center items-center">
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
        <button className="bg-[#C2EDA7] border-[#03247C] rounded-2xl border w-fullmd:w-fit text-xs font-bold uppercase py-3 px-6 my-3">
          Sign up
        </button>
      </div>
    </>
  );
}

export default Intro;
