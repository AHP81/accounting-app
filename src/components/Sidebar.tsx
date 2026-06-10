import {NavLink} from "react-router-dom";
import SidebarItem from "@/components/SidebarItem.tsx";
import House from '@/icons/House.svg?react'
import Trading from '@/icons/Trading.svg?react'
import Revenue from '@/icons/Revenue.svg?react'
import CreditCard from '@/icons/CreditCard.svg?react'
import Group from '@/icons/Group.svg?react'
import Calender from '@/icons/Calender.svg?react'
import Setting from '@/icons/Setting.svg?react'
import Eye from '@/icons/Eye.svg?react'

export default function Sidebar() {
    return (
        <aside className="w-20 h-screen">
            <nav className="flex flex-col h-full justify-between py-6">

                <div className={'w-full flex items-center justify-center'}>
                    <SidebarItem to={'/'} Icon={House}/>
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <SidebarItem to={'trading'} Icon={Trading}/>
                    <SidebarItem to={'revenue'} Icon={Revenue}/>
                    <SidebarItem to={'creditCard'} Icon={CreditCard}/>
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <SidebarItem to={'group'} Icon={Group}/>
                    <SidebarItem to={'calender'} Icon={Calender}/>
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <SidebarItem to={'setting'} Icon={Setting}/>
                    <SidebarItem to={'eye'} Icon={Eye}/>
                </div>
            </nav>
        </aside>
    );
}