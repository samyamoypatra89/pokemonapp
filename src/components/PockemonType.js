'use client'
import React from 'react'

const PockemonType = ({typeofPokemon,setSlectedPokemonType}) => {
    return (
        <select onChange ={(e) => setSlectedPokemonType(e.target.value)} className='font-poppins bg-white rounded-md p-2 px-4 border border-gray-300 w-full lg:w-[200px] text-black mt-4 mb-2 text-[#050505] outline-none focus:ring-0'>
            <option value={""}>Select</option>
            {
                typeofPokemon?.map((tpokemon, index) =>{
                    return (
                        <option value={tpokemon} key={index}>{tpokemon}</option>
                    )
                })
            }
        </select>
    )
}

export default PockemonType