import { NavLink } from "react-router-dom";
import * as React from "react";


export default function SidebarItem({
                                        to,
                                        Icon,
                                    }: {
    to: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
    return (
        <NavLink
            to={to}
            end={to === '/'}
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
            <Icon className={'w-6 h-6'} />
        </NavLink>
    );
}