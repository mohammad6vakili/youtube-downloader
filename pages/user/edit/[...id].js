import Input from "@/components/form/Input";
import Header from "@/components/layouts/admin/Header";
import Switching from '@/components/form/Switch'
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
    const [Address, setAddress] = useState('https://example.com');
    // const [enabled1, setEnabled1] = useState(false)
    // const [enabled2, setEnabled2] = useState(false)
    return (
        <div>
            <Head><title>ویرایش لینک - پنل کاربری</title></Head>
            <Header>
                <div className="grid grid-cols-12 gap-6 mt-3">
                    <div className="col-span-8 p-6 bg-white dark:bg-slate-800 rounded-md shadow-md">
                        <div className="w-full relative pb-4 border-b border-gray-200  flex justify-between items-center">
                            <div className="font-medium">ویرایش ادرس</div>
                            <Link href="/user/dashboard">
                                <a className="capitalize rounded-md bg-red-600 flex justify-around items-center text-white lg:text-sm text-xs lg:px-4 px-3 py-2">
                                    <span className="text-xs">افزودن لینک</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </a>
                            </Link>
                        </div>
                        <div className="my-6">
                            <div className="relative">
                                <Input place={'لینک ویدیو'} label="لینک را وارد کنید" value={Address}
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                            </div>
                            <div className="mt-10">
                                <h2 className="text-md font-medium text-gray-900">روش دسترسی به محتوا</h2>
                                <div className="flex flex-col items-start justify-center space-y-4">
                                    <div></div>
                                    <div className="flex items-center space-x-3">
                                        <div></div>
                                        <div className="text-sm text-gray-700"> ✅ دسترسی به محتوای لینک از منبع اصلی</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div></div>
                                        <div className="text-sm text-gray-700"> ✅ دسترسی به محتوای از آدرس جدید به سرعت بالا 🔥</div>
                                    </div>
                                </div>
                                <div className="h-[1px] bg-gray-200 w-full my-6"></div>
                                <div className="text-sm flex items-center">
                                    <h2 className="font-light text-gray-600">امتیاز لینک :  </h2>
                                    <div className="font-medium text-gray-900">&nbsp; 5 &nbsp;</div>
                                </div>
                                <div className="text-sm flex items-center">
                                    <h2 className="font-light text-gray-600">پیام :  </h2>
                                    <div className="font-meidum text-gray-900">&nbsp; این دامین مورد تایید است &nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 p-6 bg-white rounded-md shadow-md">
                        <div className="pb-4 border-b border-gray-200 w-full font-medium">اشتراک شما</div>

                        <div className="w-full flex justify-center h-full flex-col items-center">
                            <div className="text-md text-gray-900">تعداد لینک های باقی مانده</div>
                            <div className="my-2 font-medium lg:text-5xl text-2xl text-gray-900 font-sans">9</div>
                            <span className="text-red-500 text-lg mr-1 font-medium">لینک</span>
                        </div>
                    </div>
                    <div className="col-span-7 rounded-md">
                    </div>
                    <div className="col-span-5 p-6 bg-white rounded-md shadow-md">
                        <div className="pb-4 border-b border-gray-200 w-full font-medium">لیست آدرس های شما</div>

                        <div className="w-full">
                            <div className="relative">
                                <div className="overflow-y-auto w-full">
                                    <table className="w-full table-auto">
                                        <thead className="text-xs justify-center font-medium text-gray-500 bg-gray-50">
                                            <tr className="w-full">
                                                <th className="p-2 text-center w-full">
                                                    <div className="font-medium text-right">آدرس</div>
                                                </th>
                                                <th className="p-2 text-center w-full">
                                                    <div className="font-medium text-right">وضعیت</div>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                       <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://iranian.com</Link>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-yellow-400 text-xs">درحال بررسی</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://iranian.com</Link>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-green-500 text-xs">تایید شد</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://iranian.com</Link>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-green-500 text-xs">تایید شد</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Header>
        </div>
    )
}
