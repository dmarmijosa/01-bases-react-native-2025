import axios from "axios";
import { type UserListResponse } from "../interfaces/reqres.response";

export const loadUserActions = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      "https://reqres.in/api/users/",
      { params: { page }, headers: { "x-api-key": "reqres-free-v1" } }
    );
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
