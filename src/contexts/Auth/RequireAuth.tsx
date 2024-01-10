import { useContext, useEffect, useState } from "react";
import SignIn from "../../pages/Signin";
import { AuthContext } from "./AuthContext";
import Hero from "../../pages/Hero/Hero";
import { CircularProgress } from "@mui/material";

// eslint-disable-next-line no-empty-pattern
export const RequireAuth = ({}: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Sinaliza que a verificação foi concluída
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    ); // Mostra uma mensagem de carregamento enquanto verifica a autenticação
  }

  if (!auth.user) {
    return <SignIn />;
  }

  return <>{<Hero />}</>; // Renderiza o conteúdo protegido se o usuário estiver autenticado
};
