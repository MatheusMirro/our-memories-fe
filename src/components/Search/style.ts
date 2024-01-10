import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  position: fixed;
  top: 36px;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  background-color: red;
`;

export const Results = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: pointer;

  max-height: 300px; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Estilo dos cartões de usuário nos resultados */
  div {
    padding: 10px;
    border-bottom: 1px solid #eee;

    /* Estilo do texto do nome do usuário */
    p {
      margin: 0;
      font-weight: 600;
    }
  }

  /* Estilize os cartões de usuário conforme necessário */
  /* Por exemplo, adicione imagem de perfil, mais informações etc. */
`;
