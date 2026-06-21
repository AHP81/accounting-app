import Plus from '@/icons/Plus.svg?react';
import {DataTable} from "@/ui/data-table/DataTable.tsx";
import {transactions} from "@/ui/data-table/data/transactions.ts";
import {columns} from "@/ui/data-table/features/transactions/columns.tsx";

export default function Dashboard() {

    // const [open, setOpen] = useState(false);

    return (
        <div dir={'rtl'}>
            <div className="flex">
                <div
                    className={'flex bg-green-400 text-white rounded-lg px-9 py-4 hover:bg-green-500 cursor-pointer transition duration-200 select-none'}>
                    <button className={'cursor-pointer'}>افزودن مشتری</button>
                    <Plus className={'mr-4'}/>
                </div>
                <div
                    className={'flex mr-8 bg-purple-400 text-white rounded-lg px-9 py-4 hover:bg-purple-500 cursor-pointer transition duration-200 select-none'}>
                    <button className={'cursor-pointer'}>افزودن حساب</button>
                    <Plus className={'mr-4'}/>
                </div>
            </div>
            <div className={'flex justify-between items-center my-8'}>
                <div>
                    <div className={'bg-gray-50 text-gray-400 rounded-t-lg py-2 px-8 text-xs'}>قیمت روز ارزها</div>
                    <div className={'flex justify-between items-center bg-white rounded-b-lg px-8 py-9'}>
                        <div>
                            <div className={'font-bold px-12'}>17850</div>
                            <div className={'text-gray-500 text-xs'}>دلار</div>
                        </div>
                        <div className={'font-bold pr-8'}>-</div>
                        <div className={'pr-8'}>
                            <div className={'font-bold px-12'}>10800</div>
                            <div className={'text-gray-500 text-xs'}>دینار</div>
                        </div>
                        <div className={'font-bold pr-8'}>-</div>
                        <div className={'pr-8'}>
                            <div className={'font-bold px-12'}>202000</div>
                            <div className={'text-gray-500 text-xs'}>یورو</div>
                        </div>
                    </div>
                </div>
                <div>
                    تاریخ شمسی - میلادی
                </div>
                <div>
                    <div className={'bg-gray-50 text-gray-400 rounded-t-lg py-2 px-8 text-xs'}>طلب و بدهی ها</div>
                    <div className={'flex justify-between items-center bg-white rounded-b-lg px-8 py-9'}>
                        <div>
                            <div className={'font-bold px-12'}>0</div>
                            <div className={'text-gray-500 text-xs'}>تومان</div>
                        </div>
                        <div className={'font-bold pr-8'}>-</div>
                        <div className={'pr-8'}>
                            <div className={'text-green-500 font-bold px-12'}>1200</div>
                            <div className={'text-gray-500 text-xs'}>دلار</div>
                        </div>
                        <div className={'font-bold pr-8'}>-</div>
                        <div className={'pr-8'}>
                            <div className={'text-red-500 font-bold px-12'}>2000</div>
                            <div className={'text-gray-500 text-xs'}>دینار</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <DataTable
                    rowKey="id"
                    columns={columns}
                    data={transactions}
                    loading={false}
                />
            </div>
            <div>

            </div>
        </div>
    );
}