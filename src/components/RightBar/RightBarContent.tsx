import { useContext, useEffect, useState } from "react";
import { RightSidebar } from "./style";
import { UserTarget } from "../../types/UserTarget";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

function RightBarContent() {
  const [userData, setUserData] = useState<UserTarget | null>(null);
  const [profilePicture, setProfilePicture] = useState<string>("");
  const { username } = useParams();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const loggedUser = auth.user?.user;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
        // Carrega a imagem do perfil do usuário
        const profilePicResponse = await fetch(
          `http://localhost:8080/api/profile-picture/${username}`
        );
        const profilePicData = await profilePicResponse.json();
        setProfilePicture(profilePicData[0].fileData);
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error);
      }
    };

    if (username !== loggedUser) {
      fetchUserData();
    } else {
      navigate("/"); // Ou redirecione para a rota correta para o usuário logado
    }
  }, [loggedUser, navigate, username]);

  return (
    <RightSidebar>
      {userData && (
        <div>
          <img
            src={`data:image/png;base64,${profilePicture}`}
            alt={userData.username}
            style={{ maxWidth: "300px" }}
          />
          <h3>
            {userData.name} {userData.lastname}
          </h3>
          <h4>Posts</h4>
          <p>{userData.postCount}</p>

          <h4>Followers</h4>
          <p>3000</p>

          <p>{userData.biography}</p>
        </div>
      )}
    </RightSidebar>
  );
}

export default RightBarContent;
