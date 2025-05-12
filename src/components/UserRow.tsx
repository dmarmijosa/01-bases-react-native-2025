import React from "react";

const UserRow = () => {
  return (
    <tr className="p-2">
      <td>
        <img src="" className="rounded-full w-14" alt="User Avatar" />
      </td>
      <td>
        {"Danny"} {"Armijos"}
      </td>
      <td>{"danny@gmail.com"}</td>
    </tr>
  );
};

export default UserRow;
