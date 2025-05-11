import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext();
  if (isChecking) {
    return <h1>Verificando usuario</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={() => logout()}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2 hover:bg-blue-700"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicación</h3>
          <button
            onClick={() => loginWithEmailPassword("danny@gmail.com", "123456")}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2 hover:bg-blue-700"
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};

export default LoginPage;
