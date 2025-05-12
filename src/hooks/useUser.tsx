import { useEffect, useState } from "react";
import type { User } from "../interfaces/reqres.response";
import { loadUserActions } from "../actions/load-user.action";

const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    loadUserActions(2).then(setUsers);
  }, []);

  return {
    users,
  };
};

export default useUser;
