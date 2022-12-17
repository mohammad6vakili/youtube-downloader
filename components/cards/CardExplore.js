import Image from 'next/image'
import Link from 'next/link'

export default function CardExplore({ data, key }) {
    if (data) {
        return (
            <Link href={`category/${data?.id}/${data?.category_title}`} key={key}>
                <div className='capitalize rounded-md text-sm dark:bg-slate-700 bg-slate-50 py-3 px-5 transition duration-150 hover:bg-gray-300 cursor-pointer flex justify-center items-start flex-col h-24'>
                    <div>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <p className='font-medium text-sm text-left dark:text-slate-100 text-gray-700 mt-1'>{data?.category_title}</p>
                </div>
            </Link>
        )
    }
}
