import Plus from '@/icons/Plus.svg?react'

export default function Dashboard() {
    return <div dir={'rtl'}>
        <div className="flex">
            <div className={'flex bg-green-400 text-white rounded-lg px-9 py-4 hover:bg-green-500 cursor-pointer transition duration-200 select-none'}>
                <button className={'cursor-pointer'}>افزودن مشتری</button>
                <Plus className={'mr-4'}/>
            </div>
            <div className={'flex mr-8 bg-purple-400 text-white rounded-lg px-9 py-4 hover:bg-purple-500 cursor-pointer transition duration-200 select-none'}>
                <button className={'cursor-pointer'}>افزودن حساب</button>
                <Plus className={'mr-4'}/>
            </div>
        </div>
        <div>

        </div>
        <div>
            
        </div>
    </div>;
}