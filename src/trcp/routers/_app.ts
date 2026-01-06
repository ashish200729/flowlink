import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { TRPCError } from '@trpc/server';



export const appRouter = createTRPCRouter({
  testai: protectedProcedure.mutation(async ({ }) => {
    console.log("testai");
    await inngest.send({
      name: "execute.workflow",
    })
    return { success: true, message: "Workflow executed successfully" }
  }),
    

  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),

  createWorkflow: protectedProcedure.mutation(async ({ }) => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "ashish@flowlink.ai",
      },
    })
    return { success: true, message: "Workflow created successfully" }
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;