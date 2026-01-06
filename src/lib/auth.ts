import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db";
import { checkout, polar, portal } from "@polar-sh/better-auth"
import { polarClient } from "@/lib/polar";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 1, // Allow passwords with minimum 1 character
    },
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [{
                        productId: "9bc5cf2e-7903-49d7-998f-488895a67f36",
                        slug: "pro",
                    }
                ],
                successUrl: `${process.env.POLAR_SUCCESS_URL}`,
                authenticatedUsersOnly: true,
                }),
                portal(), 
            ]
        })
    ]

}); 