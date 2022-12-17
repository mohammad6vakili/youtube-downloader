import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full relative'>
            <nav
                className=" bg-white w-full border-gray-400 border-t z-30 relative flex justify-between items-center mx-auto pl-8 pr-14 py-3">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <p className="text-xl cursor-pointer font-medium text-red-600">Panel Admin</p>
                    </Link>
                </div>
                <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                    <div className="inline-block">
                        <div className="inline-flex items-center max-w-full">
                            <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative border rounded-xl px-1"
                                type="button">
                                <div className="w-full px-2">
                                    <input type="search" name="search" id="search" placeholder="جستجو کنید...."
                                        className="w-full rounded-md border-none focus:ring-0 focus:shadow-none bg-white py-2 focus:outline-none px-5 text-base text-gray-700 placeholder:text-gray-400 outline-none" />
                                </div>
                                <div className="flex items-center justify-center relative mx-2  h-6 w-6 rounded-full">
                                    <svg className="w-5 text-gray-600 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </nav>

        </div>
    )
}
