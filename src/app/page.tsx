import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trcp/server";

const Page = async () => {

  const data = await caller.getUsers()

  return <div className="min-h-screen min-w-screen flex items-center justify-center">
    protected server component
    {JSON.stringify(data)}
  </div>
}

export default Page;