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
  width: 300px;
  height: 300px;
  object-fit: cover; /* Isso preencherá a área mantendo a proporção */
`;


export const PostsList = styled.ul`
  margin: 0;
  padding: 1em;
  list-style: none;
`;
