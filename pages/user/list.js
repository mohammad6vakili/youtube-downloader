import Input from "@/components/form/Input";
import Header from "@/components/layouts/admin/Header";
import Switching from '@/components/form/Switch'
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/Search";

export default function List() {
    const [Address, setAddress] = useState('https://example.com');
    const [enabled1, setEnabled1] = useState(false)
    const [enabled2, setEnabled2] = useState(false)
    return (
        <div>
            <Head><title>لینک های من - پنل کاربری</title></Head>
            <Header>
                <div className="grid grid-cols-12 gap-6 mt-3">
                <div className="inline-block w-full col-span-5">
                        <div className="inline-flex items-center max-w-full">
                            <button className="flex items-center flex-grow-0 bg-white flex-shrink pl-2 relative border rounded-xl px-1"
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
                    <div className="col-span-12 p-6 bg-white dark:bg-slate-800 rounded-md shadow-md">
                        <div className="w-full relative pb-4 border-b border-gray-200  flex justify-between items-center">
                            <div className="font-medium">لینک های من</div>
                            <Link href="/user/dashboard">
                                <a className="capitalize rounded-md bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-4 px-3 py-2">
                                    <span className="text-xs">افزودن لینک</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </a>
                            </Link>
                        </div>
                        <div className="my-6">
                            <div className="w-full">
                                <div className="relative">
                                    <div className="overflow-y-auto w-full">
                                        <table className="w-full table-auto">
                                            <thead className="text-sm justify-center font-medium text-gray-500 bg-gray-50">
                                                <tr className="w-full">
                                                    <th className="py-3 px-5 text-center">
                                                        <div className="font-medium text-center">لینک</div>
                                                    </th>
                                                    <th className="py-3 px-5 text-center">
                                                        <div className="font-medium text-center">وضعیت لینک</div>
                                                    </th>
                                                    <th className="py-3 px-5 text-center">
                                                        <div className="font-medium text-center">امتیاز لینک</div>
                                                    </th>
                                                    <th className="py-3 px-5 text-center">
                                                        <div className="font-medium text-center">زمان ثبت لینک</div>
                                                    </th>
                                                    <th className="py-3 px-5 text-center">
                                                        <div className="font-medium text-center">لینک جایگزین</div>
                                                    </th>
                                                    <th className="py-3 px-5 text-center">
                                                        <div className="font-medium text-center">عملیات</div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="text-sm divide-y divide-gray-100">
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                          <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://iranian.com</Link>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-yellow-400 text-sm text-center">درحال بررسی</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-gray-700 text-sm text-center">4</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-gray-700 text-sm text-center">1401/8/17</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-yellow-400 text-sm text-center">❌</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <Link href="#">
                                                            <a className="capitalize rounded-md bg-indigo-700 flex justify-center items-center text-white lg:text-sm text-xs lg:px-4 px-3 py-2">
                                                                <span className="text-xs">نمایش جزییات</span>
                                                                <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                          <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://iranian.com</Link>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-yellow-400 text-sm text-center">درحال بررسی</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-gray-700 text-sm text-center">4</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-gray-700 text-sm text-center">1401/8/17</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-yellow-400 text-sm text-center">❌</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <Link href="#">
                                                            <a className="capitalize rounded-md bg-indigo-700 flex justify-center items-center text-white lg:text-sm text-xs lg:px-4 px-3 py-2">
                                                                <span className="text-xs">نمایش جزییات</span>
                                                                <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                          <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://iranian.com</Link>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-yellow-400 text-sm text-center">درحال بررسی</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-gray-700 text-sm text-center">4</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-gray-700 text-sm text-center">1401/8/17</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="font-medium text-yellow-400 text-sm text-center">❌</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <Link href="#">
                                                            <a className="capitalize rounded-md bg-indigo-700 flex justify-center items-center text-white lg:text-sm text-xs lg:px-4 px-3 py-2">
                                                                <span className="text-xs">نمایش جزییات</span>
                                                                <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                            </a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
        </div>
    )
}
