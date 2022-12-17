import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='w-2/12 h-screen hidden lg:flex flex-col bg-white px-2'>
            <div className='mt-6 divide-y-2 flex flex-col divide-gray-100'>
                <div></div>
                <Link href="/user/dashboard">
                    <div
                        className='py-3 px-4 hover:shadow-md bg-gray-100 shadow-gray-300 transition-all flex justify-between items-center cursor-pointer duration-75 hover:bg-red-200 rounded-md hover:text-red-600 text-gray-600 w-full'>
                        <div className="flex items-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            <div className='capitalize mr-4 text-md'>افزودن لینک جدید</div>
                        </div>
                    </div>
                </Link>
                <Link href="/user/list">
                    <div
                        className='py-3 mt-1 px-4 hover:shadow-md bg-gray-100 shadow-gray-300 transition-all flex justify-between items-center cursor-pointer duration-75 hover:bg-red-200 rounded-md hover:text-red-600 text-gray-600 w-full'>
                        <div className="flex items-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            <div className='capitalize mr-4 text-md'>لیست لینک ها</div>
                        </div>
                    </div>
                </Link>

                <Link href="/user/edit/2">
                    <div
                        className='py-3 px-4 mt-1 hover:shadow-md bg-gray-100 shadow-gray-300 transition-all flex justify-between items-center cursor-pointer duration-75 hover:bg-red-200 rounded-md hover:text-red-600 text-gray-600 w-full'>
                        <div className="flex items-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            <div className='capitalize mr-4 text-md'>ویرایش لینک</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
