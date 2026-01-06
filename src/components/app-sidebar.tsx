"use client";

import {
    WorkflowIcon,
    FolderOpenIcon,
    KeyIcon,
    PlayIcon,
    StarIcon,
    CreditCardIcon,
    LogOutIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import {
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    Sidebar,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarGroup,
    SidebarGroupContent,
} from "@/components/ui/sidebar";
import { title } from "process";
import { url } from "inspector";
import { group } from "console";


const menuItems = [
    {
        title: "Workflows",
        items: [
            {
                title: "workflows",
                icon: FolderOpenIcon,
                url: "/workflows",
            },
            {
                title: "credentials",
                icon: KeyIcon,
                url: "/credentials",
            },
            {
                title: "executions",
                icon: PlayIcon,
                url: "/executions",
            },
        ],
    }
];

export const AppSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
     
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild className="gap-x-4 h-10 px-4">
                        <Link href="/workflows" prefetch={false}> 
                            <Image src="/logos/logo.svg" alt="Flowlink" width={30} height={30} />
                            <span className="font-semibold text-sm">FlowLink</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarHeader>
            <SidebarContent>
                {menuItems.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupContent>
                            <SidebarMenu>
                            {group.items.map((item) => (
                               <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton className="gap-x-4 h-10 px-4" tooltip={item.title} isActive={
                                    pathname === item.url
                                } asChild> 
                                    <Link href={item.url} prefetch={false}>
                                        <item.icon className="size-4" />
                                        <span className="truncate">{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                               </SidebarMenuItem>
                            ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuItem>
                    <SidebarMenuButton className="gap-x-4 h-10 px-4" tooltip="Upgrade to pro" onClick={() => {}}>
                        <StarIcon className="size-4" />
                        <span className="truncate">Upgrade to premium</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton className="gap-x-4 h-10 px-4" tooltip="Billing Portal" onClick={() => {}}>
                        <CreditCardIcon className="size-4" />
                        <span className="truncate">Billing Portal</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton className="gap-x-4 h-10 px-4" tooltip="Sign out" onClick={() => {
                        authClient.signOut({
                            fetchOptions: {
                                onSuccess: () => {
                                    router.push("/login");
                                },
                            },
                        });
                        
                    }}>
                        <LogOutIcon className="size-4" />
                        <span className="truncate">Sign out</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarFooter>

        </Sidebar>
    )
}