import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Header({ children }) {
    return (
        <div className='bg-gray-100 dark:bg-slate-900 text-gray-800 min-h-screen w-full relative overflow-x-hidden'>
            <Navbar />
            <div className="flex w-full">
                <Sidebar />
                <main className="w-10/12">
                    <div className="py-4 px-8">
                    <h1 className='text-xl font-medium'>لینک جدید</h1>
                        <div className="py-6 px-4 text-gray-800">
                            {/* <div className="px-6 py-8 bg-white w-full rounded-xl mx-auto shadow-sm border border-gray-100"> */}
                                {children}
                            {/* </div> */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
