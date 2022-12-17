import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Login() {
    const [phoneNumber, setphoneNumber] = useState('');
    const router = useRouter();
    function KeyUpSubmitHandler(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            router.push('/user/dashboard');
        }
    }
    function SubmitHandler(e) {
        e.preventDefault();
        router.push('/user/dashboard');
    }
    return (
        <div className='overflow-hidden lg:px-0 px-3'>
            <div class="min-h-screen dark:bg-slate-900 bg-red-400 flex justify-center items-center w-full">
                <div class="absolute w-60 h-60 rounded-xl dark:bg-red-900 bg-red-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                </div>
                <div class="absolute w-48 h-48 rounded-xl dark:bg-red-900 bg-red-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
                </div>
                <div class="px-3 pt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl z-20">
                    <div className='w-full px-6 flex justify-between items-center'>
                        <div></div>
                        <Link href="/">
                            <a className='text-gray-600 hover:text-gray-800 dark:text-slate-300 transition duration-200 text-[11px] flex items-center'>
                                <p>بازگشت</p>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                            </a>
                        </Link>
                    </div>
                    <div className='pb-14 pt-4 lg:px-12'>
                        <div>
                            <h1 class="lg:text-2xl text-lg font-bold text-center mb-4 cursor-pointer">ورود به حساب کاربری</h1>
                            <p class="w-80 text-center lg:text-sm text-[11px] mb-8 font-medium text-gray-600 cursor-pointer">یک حساب کاربری ایجاد کنید تا از تمام خدمات بدون تبلیغات به صورت رایگان لذت ببرید!</p>
                        </div>
                        <div class="space-y-4">
                            <input type="text" maxLength={11} onKeyUp={KeyUpSubmitHandler} value={phoneNumber} onChange={(event) => setphoneNumber(event.target.value)} placeholder="شماره موبایل : 09"
                                class="block lg:text-sm text-xs py-3 px-4 rounded-lg w-full border outline-none dark:border-slate-800 dark:bg-slate-900" />
                        </div>
                        {/* <Link href="/user/dashboard"> */}
                        <div class="text-center mt-6">
                            <button onClick={SubmitHandler} class="py-3 w-full lg:text-sm text-xs text-white dark:bg-red-500 bg-red-400 rounded-md">ارسال کد به شماره موبایل</button>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
                <div class="w-40 h-40 absolute dark:bg-red-900 bg-red-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div
                    class="w-20 h-40 absolute dark:bg-red-900 bg-red-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
                </div>
            </div>
        </div>
    )
}
