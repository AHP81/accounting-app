import { NavLink } from "react-router-dom";

export default function SidebarItem({
                                        to,
                                        Icon,
                                    }: {
    to: string;
    Icon: React.ElementType;
}) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `
          w-12 h-12
          p-3
          rounded-full
          flex
          items-center
          justify-center
          transition
          ${isActive ? "bg-gray-100" : ""}
        `
            }
        >
            <Icon className="w-6 h-6" />
        </NavLink>
    );
}