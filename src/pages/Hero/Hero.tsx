import MainContent from "../../components/Main/MainContent";
import LeftBarContent from "../../components/LeftBar/LeftBarContent";
import RightBarContent from "../../components/RightBar/RightBarContent";

const Hero = () => {
  return (
    <div>
      <LeftBarContent />
      <MainContent />
      <RightBarContent />
    </div>
  );
};

export default Hero;
