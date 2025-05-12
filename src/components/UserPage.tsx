import useUser from "../hooks/useUser";
import UserRow from "./UserRow";

const UserPage = () => {
  const { users, nextPage, prevPage } = useUser();
  return (
    <>
      <h3>Usuarios</h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow user={user} key={user.id} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between w-[500px] mt-2">
        <button
          onClick={prevPage}
          className="p-2 bg-blue-500 text-white rounded-[5px] hover:bg-blue-700"
        >
          Anteriores
        </button>
        <button
          onClick={nextPage}
          className="p-2 bg-blue-500 text-white rounded-[5px] hover:bg-blue-700"
        >
          Siguientes
        </button>
      </div>
    </>
  );
};

export default UserPage;
