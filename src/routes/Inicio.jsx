import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Inicio = () => {
  const { user, signIn, signOut } = useContext(UserContext);

  return (
    <div>
      <h1>Inicio</h1>
      <h2>
        {/* Si existe el usuario, nos conectamos y accedemos, caso contrario se desconecta*/}
        {user ? "Conectado" : "Desconectado"}
      </h2>
      {user ? (
        <>
          <button className="btn btn-primary" onClick={signOut}>
            Desconectar
          </button>
          <Link to="/protegida" className="btn btn-warning">
            Ruta protegida
          </Link>
        </>
      ) : (
        <button className="btn btn-primary" onClick={signIn}>
          Acceder
        </button>
      )}
    </div>
  );
};

export default Inicio;
