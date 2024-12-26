'use client'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
const PokemonCard = ({ data }) => {
    return (
        <>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 font-poppins bg-white mb-4 lg:mb-0">
                <img
                    className="w-[150px] mx-auto"
                    src={data?.imagePath}
                    alt="Card Image"
                />

                <div className="p-4 bg-[#FAFAFA]">
                    <div className="text-[20px] font-bold text-[#193E54]">{data?.name}</div>
                    {
                        (data && data?.name) && (
                            <Link className="mt-4 text-[#639FC3] text-[15px] font-medium flex items-center" href={`/${data?.name}`}>
                                Details
                                <span className='ms-2'><FaLongArrowAltRight /></span>
                            </Link>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default PokemonCard