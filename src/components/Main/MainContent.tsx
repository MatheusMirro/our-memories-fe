import { useContext, useEffect, useState } from "react";
import { GridContainer } from "./style";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Posts } from "../../types/Posts";

function MainContent() {
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await auth.profile(auth.user?.user || ""); // Chama a função profile do contexto de autenticação

        if (userProfile.posts) {
          setPosts(userProfile.posts);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [auth]);

  if (isLoading) {
    return <p>Carregando posts...</p>;
  }

  return (
    <GridContainer>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.fileName}</h3>
          <p>
            {post.fileType} - {post.fileSize}
          </p>
          <p>{post.fileName}</p>
        </div>
      ))}
    </GridContainer>
  );
}

export default MainContent;
