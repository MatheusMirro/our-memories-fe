import {
  GridWrapper,
  Item1,
  Icons,
  AvatarImg,
  HeaderItems,
  UserInfo,
  P,
  SocialCounter,
  PostCounter,
  FollowersCounter,
  FollowingCounter,
} from "./style";
import { Avatar, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { User } from "../../types/User";
import { ProfilePicture } from "../../types/ProfilePicture";
import { useNavigate } from "react-router-dom";

const LeftBarContent = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [profilePicture, setProfilePicture] = useState<ProfilePicture | null>(
    null
  );

  const auth = useContext(AuthContext);
  const ownUser = auth.user?.user;

  const navigate = useNavigate();

  const home = () => {
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${ownUser}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error);
      }
    };

    const fetchProfilePicture = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/profile-picture/${ownUser}`
        );
        const data = await response.json();

        if (data && data.length > 0 && data[0].fileData) {
          setProfilePicture(data[0].fileData);
        } else {
          console.error(
            "Dados de imagem inválidos ou ausentes na resposta da API."
          );
        }
      } catch (error) {
        console.error("Erro ao obter a imagem de perfil:", error);
      }
    };

    fetchUserData();
    fetchProfilePicture();
  }, [ownUser]);
  return (
    <div>
      <GridWrapper>
        <Item1>
          <HeaderItems>
            <CategoryIcon style={{ color: "black" }} />
            <p onClick={home} style={{ cursor: "pointer" }}>
              Our Memories
            </p>
          </HeaderItems>
          <AvatarImg>
            <Avatar
              alt="Mirro"
              src={`data:image/png;base64,${profilePicture}`}
              sx={{
                height: 80,
                width: 80,
              }}
            />
          </AvatarImg>

          <UserInfo>
            <P>{auth.user?.user}</P>
            <P>Gama, DF</P>
          </UserInfo>

          <SocialCounter>
            <PostCounter>
              <P>Post</P>
              <P>{userData?.postCount}</P>
            </PostCounter>

            <FollowersCounter>
              <P>Followers</P>
              <P>5000</P>
            </FollowersCounter>

            <FollowingCounter>
              <P>Following</P>
              <P>512</P>
            </FollowingCounter>
          </SocialCounter>

          <Icons>
            <HomeIcon style={{ color: "black" }} />
            <SearchIcon style={{ color: "black" }} />
            <Badge badgeContent={12} color="info">
              <SendIcon style={{ color: "black" }} />
            </Badge>
            <Badge badgeContent={4} color="info">
              <NotificationsNoneIcon style={{ color: "black" }} />
            </Badge>
            <SettingsIcon style={{ color: "black" }} />

            <AccountCircleIcon style={{ color: "black" }} />
          </Icons>
        </Item1>
      </GridWrapper>
    </div>
  );
};

export default LeftBarContent;
