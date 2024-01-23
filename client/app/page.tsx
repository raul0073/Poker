import UsersComp from "./Components/UsersComp";
import { getAllUsers } from "@/dbServices/getUsers";
import { USER } from "@/Types/UserType";

export default async function Home() {
  const res = await getAllUsers();
  const data: USER[] = res.data;

  return (
    <>
      <div className="header w-[80%] m-auto p-1 mt-2 mb-2 flex justify-center">
        <h1>Home Page</h1>
      </div>
      <div className="users">
        {data ? <UsersComp users={data} /> : <h2>Loading...</h2>}
      </div>
    </>
  );
}
