import About from "../components/About";
import Banner from "../components/Banner";
import Browse from "../components/Browse";
import DeskBanner from "../components/DeskBanner";
import DeskContainer from "../components/DeskContainer";
import DeskMain from "../components/DeskMain";
import Main from "../components/Main";
import RegisterBanner from "../components/RegisterBanner";

function Home() {
  return (
    <>
      <Banner />
      <Browse />
      <DeskBanner />
      <DeskContainer id="26" title="Unisex Outfits" />
      <DeskContainer id="17" title="Men's Fashion" />
      <RegisterBanner />
      <Main />
      <DeskMain />
      <About />
    </>
  );
}

export default Home;
