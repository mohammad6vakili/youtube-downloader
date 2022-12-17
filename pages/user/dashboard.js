import Input from "@/components/form/Input";
import Header from "@/components/layouts/admin/Header";
import Switching from '@/components/form/Switch'
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Dasboard() {
  const [Address, setAddress] = useState('');
  const [enabled1, setEnabled1] = useState(false)
  const [enabled2, setEnabled2] = useState(false)
  return (
    <div>
      <Head><title>افزودن لینک جدید - پنل کاربری</title></Head>
      <Header>
        <div className="grid grid-cols-12 gap-6 mt-3">
          <div className="col-span-8 p-6 bg-white dark:bg-slate-800 rounded-md shadow-md">
            <div className="pb-4 border-b border-gray-200 w-full font-medium">آدرس جدید</div>
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
                    <div className="text-sm text-gray-700">دسترسی به محتوای لینک از منبع اصلی</div>
                    <Switching enabled={enabled1} setEnabled={setEnabled1} label={'دسترسی به محتوای لینک از منبع اصلی'} />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div></div>
                    <div className="text-sm text-gray-700">دسترسی به محتوای از آدرس جدید به سرعت بالا 🔥</div>
                    <Switching enabled={enabled2} setEnabled={setEnabled2} label={'دسترسی به محتوای لینک از منبع اصلی'} />
                  </div>
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
          <div className="col-span-7 p-6 bg-white rounded-md shadow-md">
            <div className="pb-4 border-b border-gray-200 w-full font-medium">انتشار</div>

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
                          <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://example.com</Link>
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
          <div className="col-span-5 p-6 bg-white rounded-md shadow-md">
            <div className="pb-4 border-b border-gray-200 w-full font-medium">لیست ادرس های شما</div>

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
                          <Link href="https://example.com" target={'_blank'} className="underline font-medium text-blue-500 hover:text-blue-700">https://example.com</Link>
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
