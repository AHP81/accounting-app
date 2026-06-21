// import {NavLink} from "react-router-dom";
import { sidebarGroups } from '@/config/sidebar';
import SidebarItem from "@/components/SidebarItem.tsx";

export default function Sidebar() {
    return (
        <aside className="w-20 h-screen bg-white">
            <nav className="flex flex-col h-full justify-between py-6">
                {
                    sidebarGroups.map((group, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col items-center justify-center"
                        >
                            {group.items.map((item) => (
                                <SidebarItem
                                    key={item.path}
                                    to={item.path}
                                    Icon={item.icon}
                                />
                            ))}
                        </div>
                    ))
                }
            </nav>
        </aside>
    );
}