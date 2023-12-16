import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 4rem auto 45px 1fr;
  gap: 7px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
`;

export const Item1 = styled.div`
  background-color: red;
  grid-row: 1 / 5;
  grid-column: 1 / 2;
  width: 262px;
`;

export const SocialCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;

export const PostCounter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FollowersCounter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FollowingCounter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const P = styled.h5`
  margin: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-left: 30px;
  padding-top: 55px;
`;

export const AvatarImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: normal;
  gap: 14px;
  margin-left: 24px;
`;
