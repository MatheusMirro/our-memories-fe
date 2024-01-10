import MainContent from "../../components/Main/MainContent";
import LeftBarContent from "../../components/LeftBar/LeftBarContent";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/Search/Search";
import EditProfile from "../../components/Profile/Profile";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import RightBarContent from "../../components/RightBar/RightBarContent";

const Hero = () => {
  const { username } = useParams();
  const auth = useContext(AuthContext);
  const ownUser = auth.user?.user;

  return (
    <div>
      {username === ownUser ? (
        <>
          <LeftBarContent />
          <EditProfile />
        </>
      ) : (
        <>
          <LeftBarContent />
          <SearchBar />
          <RightBarContent />
          <MainContent />
        </>
      )}
    </div>
  );
};

export default Hero;
