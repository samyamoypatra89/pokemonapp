'use client';
import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Search({search, setSearch, searchControl}) {
    return (
        <>
            <div className="flex items-center border border-gray-300 bg-white rounded-md my-2 w-full lg:w-[400px] relative mb-4">
                <span className="bg-white text-gray-500 p-2 font-poppins">
                    <IoIosSearch />
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 border-none outline-none focus:ring-0 px-2 p-2 font-poppins"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="absolute right-0 py-3 lg:py-2 font-poppins text-white bg-[#004368] hover:bg-white hover:text-[#004368] px-3 p-2 rounded-tr-md rounded-br-md border border-[#004368]" type='button' onClick={searchControl}>
                    <div className='hidden lg:block'>Search</div>
                    <div className='block lg:hidden'><IoIosSearch /></div>
                </button>
            </div>
        </>
    )
}

export default Search