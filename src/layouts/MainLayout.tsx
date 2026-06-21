import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { sidebarGroups } from "@/config/sidebar";
import SidebarItem from "@/components/SidebarItem";

export default function MainLayout() {
    const allItems = sidebarGroups.flatMap((group) => group.items);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex">
                <Sidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-hidden container mx-auto px-2 lg:px-4 pb-16 lg:pb-0">
                <Outlet />
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-14 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                {allItems.map((item) => (
                    <SidebarItem key={item.path} to={item.path} Icon={item.icon} />
                ))}
            </nav>
        </div>
    );
}