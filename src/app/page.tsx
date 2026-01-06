"use client"

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trcp/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC()
  const testAi = useMutation(trpc.testai.mutationOptions());

  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const queryClient = useQueryClient();

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast("Workflow creating");
    }
  }));

  return <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
    <div>protected server component</div>
    <div>{JSON.stringify(data, null, 2)}</div>
    <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>Test AI</Button>

    <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button>

    <Button type="submit">Sign Out</Button>
  </div>
}

export default Page;