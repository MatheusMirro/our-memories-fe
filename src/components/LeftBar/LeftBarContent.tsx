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
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SendIcon from "@mui/icons-material/Send";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const LeftBarContent = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <GridWrapper>
        <Item1>
          <HeaderItems>
            <LunchDiningIcon style={{ color: "black" }} />
            <p>Bom dia</p>
          </HeaderItems>
          <AvatarImg>
            <Avatar
              alt="Mirro"
              src="src\assets\matheus.jpg"
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
              <P>10</P>
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

            <AccountCircleIcon style={{ color: "black" }}/>
          </Icons>
        </Item1>
      </GridWrapper>
    </div>
  );
};

export default LeftBarContent;
