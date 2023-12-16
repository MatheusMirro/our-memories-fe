import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 7px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const RightSidebar = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  padding: 15px;
`;
