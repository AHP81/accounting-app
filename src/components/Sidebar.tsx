import { NavLink } from "react-router-dom";
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
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/" end><House className={''}/></NavLink>
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/Trading"><Trading className={'w-6 h-6'}/></NavLink>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/Revenue"><Revenue className={'w-6 h-6'}/></NavLink>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/CreditCard"><CreditCard className={'w-6 h-6'}/></NavLink>
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/Group"><Group className={'w-6 h-6'}/></NavLink>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/Calender"><Calender className={'w-6 h-6'}/></NavLink>
                </div>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/Setting"><Setting className={'w-6 h-6'}/></NavLink>
                    <NavLink className={( {isActive} ) => `w-12 h-12 p-3 rounded-full flex justify-center items-center ${isActive ? 'bg-gray-100' : ''}`} to="/Eye"><Eye className={'w-6 h-6'}/></NavLink>
                </div>
            </nav>
        </aside>
    );
}