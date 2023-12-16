import styled from "styled-components";

export const PostCards = styled.div`
  display: flex;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 6px;
`;

export const Images = styled.img`
  width: 309px;
  height: 309px;
`;

export const PostsList = styled.ul`
  margin: 0;
  padding: 1em;
  list-style: none;

  li {
    margin-bottom: 0.5em;
    padding: 0.5em;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
