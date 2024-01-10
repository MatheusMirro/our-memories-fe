import { useContext, useEffect, useState } from "react";
import { Images, GridContainer } from "./style";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useParams } from "react-router-dom";

function MainContent() {
  const [imageDataList, setImageDataList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { username } = useParams();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let url = `http://localhost:8080/api/users/posts/`;

        const userToFetch = username;

        if (!userToFetch) {
          setIsLoading(false);
          return; // Se não houver usuário a ser buscado, encerre a função
        }

        url += userToFetch;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erro ao carregar imagens para este usuário.");
        }

        const data = await response.json();
        setImageDataList(Object.values(data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Erro ao buscar imagens:", error);
        setImageDataList([]); // Define uma lista vazia para usuários sem posts ou com erro
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [auth.user?.user, username]);

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Erro ao carregar imagens: {error.message}</div>;
  }

  if (imageDataList.length === 0) {
    return <div>Você ainda não segue ninguém 😭</div>;
  }

  return (
    <GridContainer>
      {imageDataList.map((imageData, index) => (
        <Images
          key={index}
          src={`data:image/png;base64,${imageData}`}
          alt={`Imagem ${index}`}
        />
      ))}
    </GridContainer>
  );
}

export default MainContent;
