import styled from "styled-components";

// Estilos para o container principal do perfil
export const ProfileContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export const Images = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover; /* Isso preencherá a área mantendo a proporção */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 6px;
`;

// Estilos para o cabeçalho do perfil
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

  h3 {
    margin: 5px 0;
    font-size: 18px;
    color: #888;
  }
`;

// Estilos para a foto de perfil
export const ProfileAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Estilos para as informações do perfil
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    margin: 10px 0;
    font-size: 16px;
  }

  button {
    padding: 8px 20px;
    border: none;
    background-color: #3897f0;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2680c2;
    }
  }
`;
