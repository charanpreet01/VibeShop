import React from 'react'

function Navbar({setToken}) {
    return (
        <div className='flex items-center justify-between py-2 px-[4%]'>
            <h1 className='text-3xl font-serif flex flex-col '>
                VibeShop
                <span className='text-sm font-sans font-semibold text-teal-600'>ADMIN PANEL</span>
            </h1>
            <button onClick={() => setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar