import { SidebarTrigger } from "./ui/sidebar";

const AppHeader = () => {
    return (
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-background">
            <div className="container flex h-16 items-center px-4">
                <SidebarTrigger />
            </div>
        </header>
    );
};

export default AppHeader;