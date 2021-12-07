import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const VerificarUsuario = ({ children }) => {
  const { user } = useContext(UserContext);

  // si no existe el usuario, lo redireecionamos a la pagina de inicio
  if (!user) {
    return <Navigate to="/" />;
  }

  // Si el usuario existe
  return children;
};

export default VerificarUsuario;
