import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-hidden container mx-auto px-4">
                <Outlet />
            </main>
        </div>
    );
}