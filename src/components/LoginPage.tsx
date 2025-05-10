import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { isChecking } = useAuthContext();
  if (isChecking) {
    return <h1>Verificando usuario</h1>;
  }

  return (
    <>
      <h3>Login</h3>
      <span>{isChecking}</span>
    </>
  );
};

export default LoginPage;
