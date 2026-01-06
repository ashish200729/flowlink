
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <SidebarInset className="bg-accent/20">
                <AppSidebar />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Layout;