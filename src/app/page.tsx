import { caller } from "@/trcp/server"


const Page = async () =>  {

 const users = await caller.getUsers();
  
  return <div className="flex items-center justify-center h-screen">
    <pre>{JSON.stringify(users, null, 2)}</pre>
  </div>
  
}

export default Page;