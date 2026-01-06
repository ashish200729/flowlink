import prisma from "@/lib/db";
import { inngest } from "./client";
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from 'ai';

export const execute = inngest.createFunction(
    { id: "ExecuteWorkflow" },
    { event: "execute.workflow" },
    async ({ event, step }) => {
        // Use step.run to execute the AI generation
        const result = await generateText({
            model: anthropic('claude-sonnet-4-5'),
            prompt: "who are you?.",
        });
        
        return { 
            success: true, 
            text: result.text,
            usage: result.usage 
        };
    },
);

