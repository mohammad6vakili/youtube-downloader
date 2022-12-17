import React from 'react'

export default function Input({ place, type = 'text', disabled = false, label = 'input', value = '',
    onChange = (event) => console.log('value::', event.target.value) }) {
    return (
        <div className='relative flex flex-col justify-center'>
            <label className='text-sm text-slate-500' htmlFor={label}>{label}</label>
            <input className='mt-2 py-3 px-5 rounded-lg bg-slate-100 text-sm transition duration-200 focus:bg-white dark:bg-slate-700 text-gray-800 placeholder:text-slate-400 border border-gray-200 focus:outline-none focus:ring-0'
                disabled={disabled} type={type} id={label} placeholder={place}
                value={value} onChange={onChange} />
        </div>
    )
}
