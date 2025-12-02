import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trcp/server";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {

  const data = await caller.getUsers()

  const signOutAction = async () => {
    "use server";
    await auth.api.signOut({ headers: await headers() });
  }

  return <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
    <div>protected server component</div>
    <div>{JSON.stringify(data)}</div>
    <form action={signOutAction}>
      <Button type="submit">Sign Out</Button>
    </form>
  </div>
}

export default Page;