'use client'
import React, { useEffect, useState } from 'react';
import { pokemonData } from "@/components/data";
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
function PokeMonDetails({ params }) {
    const unwrappedParams = React.use(params);
    const { pokemon } = unwrappedParams;
    const [data, setData] = useState({});
    const [sdata, setSData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const getData = await pokemonData.filter(data => data.name.includes(pokemon));
            setData(getData[0]);            
            const stats = Object.keys(getData[0]?.stats);
            setSData(stats);
        }
        fetchData();

    }, [pokemon]);

    return (
        <div className='px-[50px] lg:px-[135px] py-[50px]'>
            <Link href={"/"} className='text-[#11C7A5] text-[14px] mb-4 flex items-center'><IoIosArrowBack className='mr-2' /> Back</Link>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 font-poppins bg-white mb-4 lg:mb-0  bg-[#60E2C9]">
                <img
                    className="w-[150px] mx-auto"
                    src={data?.imagePath}
                    alt="Card Image"
                />

                <div className="p-4 bg-[#FDC666]">
                    <div className="mb-1  grid grid-cols-2 gap-0">
                        <span className='text-[14px] font-medium'>Name:</span>
                        <span className='text-[13px] font-normal'>{data?.name}</span>
                    </div>
                    <div className="mb-1  grid grid-cols-2 gap-0">
                        <span className='text-[14px] font-medium'>Type:</span>
                        <span className='text-[13px] font-normal'>{data?.type?.join(", ")}</span>
                    </div>
                    <div className="mb-1  grid grid-cols-2 gap-0">
                        <span className='text-[14px] font-medium'>Stats:</span>
                        <span className='text-[13px] font-normal'>{sdata?.join(", ")}</span>
                    </div>
                    <div className="mb-1  grid grid-cols-2 gap-0">
                        <span className='text-[14px] font-medium'>Abilities:</span>
                        <span className='text-[13px] font-normal'>{data?.abilities?.join(", ")}</span>
                    </div>
                    <div className="mb-1 grid grid-cols-2 gap-0">
                        <span className=' text-[14px] font-medium'>Some moves:</span>
                        <span className='text-[13px] font-normal'>{data?.moves?.join(", ")}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PokeMonDetails
