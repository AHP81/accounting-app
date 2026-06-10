import {ROUTES} from "@/config/routes.ts";
import House from '@/icons/House.svg?react';
import Trading from '@/icons/Trading.svg?react';
import Revenue from '@/icons/Revenue.svg?react';
import CreditCard from '@/icons/CreditCard.svg?react';
import Group from '@/icons/Group.svg?react';
import Calendar from '@/icons/Calendar.svg?react';
import Setting from '@/icons/Setting.svg?react';
import Eye from '@/icons/Eye.svg?react';

import type { ComponentType, SVGProps } from 'react';

export interface SidebarItemConfig {
    path: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface SidebarGroupConfig {
    items: SidebarItemConfig[];
}


export const sidebarGroups: SidebarGroupConfig[] = [
    {
        items: [
            {
                path: ROUTES.dashboard,
                icon: House,
            },
        ],
    },
    {
        items: [
            {
                path: ROUTES.trading,
                icon: Trading,
            },
            {
                path: ROUTES.revenue,
                icon: Revenue,
            },
            {
                path: ROUTES.creditCard,
                icon: CreditCard,
            },
        ],
    },
    {
        items: [
            {
                path: ROUTES.customers,
                icon: Group,
            },
            {
                path: ROUTES.calendar,
                icon: Calendar,
            },
        ],
    },
    {
        items: [
            {
                path: ROUTES.settings,
                icon: Setting,
            },
            {
                path: ROUTES.visibility,
                icon: Eye,
            },
        ],
    },
];