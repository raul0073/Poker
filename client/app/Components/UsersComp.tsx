import { USER } from "@/Types/UserType";
import React from "react";

type PropsUsers = {
  users: USER[] | null;
};

function UsersComp({ users }: PropsUsers) {
  return (
    <div className="w-full flex justify-center">
      {users?.map((user, index) => {
        return (
          <div
            key={index}
            className="border border-violet-200 rounded-md shadow-md shadow-violet-600 w-80 p-4 m-1"
          >
            <label className="text-gray-400 text-xs">Name</label>
            <p className="text-md">
              {user.firstName} {user.lastName}
            </p>
            <label className="text-gray-400 text-xs">AKA</label>
            <p className="text-md">{user.nickname}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UsersComp;
