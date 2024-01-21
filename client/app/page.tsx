'use client';
import UsersComp from "./Components/UsersComp";
import { getAllUsers } from "@/dbServices/getUsers";
import { useEffect, useState } from "react";
import { USER } from "@/Types/UserType";



export default function Home() {
  const [usersData, setUsersData] = useState<USER[] | null>()

  const getUsersData = async () => {
    let data = await getAllUsers()
    setUsersData(data.data)
  }

  useEffect(()=> {
    getUsersData()
  },[])
  return (
    <>
    <div className="header">

    <h1>Home Page</h1>
    </div>
    <div className="users">

      {usersData && <UsersComp users={usersData} />}
    </div>
    </>
  );
}
