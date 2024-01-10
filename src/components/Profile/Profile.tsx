import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import {
  GridContainer,
  Images,
  ProfileAvatar,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
} from "./style";
import { ProfilePicture } from "../../types/ProfilePicture";
import { Avatar, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

function EditProfile() {
  const [imageDataList, setImageDataList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();
  const [, setError] = useState<Error | null>(null);
  const [profilePicture, setProfilePicture] = useState<ProfilePicture | null>(
    null
  );
  const auth = useContext(AuthContext);
  const ownUser = auth.user?.user;

  useEffect(() => {
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

    const fetchImages = async () => {
      try {
        let url = `http://localhost:8080/api/users/posts/`;

        const userToFetch = username || auth.user?.user;

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
        setImageDataList([]); // Define uma lista vazia para usuários sem posts ou com erro
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
    fetchProfilePicture();
  }, [ownUser, auth.user?.user, username]);

  // Função para lidar com a edição do perfil
  const handleEditProfile = () => {
    // Lógica para redirecionar para a página de edição de perfil
    // Por exemplo: history.push('/editar-perfil');
  };

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (imageDataList.length === 0) {
    return <div>O usuario não possui posts 😭</div>;
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar>
          <Avatar
            alt="Mirro"
            src={`data:image/png;base64,${profilePicture}`}
            sx={{
              height: 150,
              width: 150,
            }}
          />
        </ProfileAvatar>
        <ProfileInfo>
          <h2>{auth.user?.user}</h2>
          <button onClick={handleEditProfile}>Editar Perfil</button>
          <p>Followers: 5000</p>
          <p>Following: 512</p>
        </ProfileInfo>
      </ProfileHeader>
      <h3>BIOGRAFIA</h3>

      <hr />
      <button>PUBLICACOES</button>
      <button>SALVOS</button>
      <button>MARCADOS</button>
      <GridContainer>
        {imageDataList.map((imageData, index) => (
          <Images
            key={index}
            src={`data:image/png;base64,${imageData}`}
            alt={`Imagem ${index}`}
          />
        ))}
      </GridContainer>
    </ProfileContainer>
  );
}

export default EditProfile;
