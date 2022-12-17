import Link from 'next/link'
import React from 'react'

const Items = [
    { 'title': 'خانه', 'icon': 'home', 'href': '/' },
    // { 'title': 'اکسپلور', 'icon': 'explore', 'href': '/explore' },
    // { 'title': 'ویدیوهای کوتاه', 'icon': 'shorts', 'href': '/shorts' },
    // { 'title': 'مشترک های شما', 'icon': 'subscripition', 'href': '/subscripition' },
]
export default function ItemMenu() {
    return (
        <div dir='rtl'>
            <div className='mt-2 space-y-2'>
                {Items.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <div className='py-3 px-2 justify-start flex font-light dark:text-white transition-all cursor-pointer duration-150 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md dark:hover:text-slate-200  hover:text-black text-slate-600 w-full'>
                            <Icon type={item.icon} />
                            <p className='capitalize'>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const Icon = ({ type = 'home' }) => {
    return (
        <div className='mx-4'>
            {type === 'home' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )}
            {type === 'explore' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            )}
            {type === 'shorts' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            )}
            {type === 'subscripition' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            )}
        </div>
    )
}