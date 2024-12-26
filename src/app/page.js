"use client";
import PockemonType from "@/components/PockemonType";
import PokemonCard from "@/components/PokemonCard";
import Search from "@/components/Search";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { pokemonData, typeofPokemon } from "@/components/data";
export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedPokemonType, setSlectedPokemonType] = useState("");
  const [pdataList, setPdataList] = useState([]);
  const filterByType = async(pokemonData, selectedPokemonType) => {
    return await pokemonData.filter(pokemon => pokemon.type.includes(selectedPokemonType));
  };

  const filterBySearch = async(arr, search ) => {
    return await arr.filter(data => data.name.includes(search));
  };

  const searchControl = () =>{
    let arr =  pdataList.filter(data => data.name ==(search));
    setPdataList(arr);
  }

  useEffect(() => {    
    if (selectedPokemonType && search){
      let arr =  filterByType(pokemonData, selectedPokemonType);
      let finalData =  filterBySearch(arr,search);
      setPdataList(finalData);
    }
    else if(selectedPokemonType && search ===""){
      let arr =  filterByType(pokemonData, selectedPokemonType);
      setPdataList(arr);
    }
    else if( search && selectedPokemonType ===""){
      let arr =  filterBySearch(pokemonData, search);
      setPdataList(arr);
    }
    else{
      setPdataList(pokemonData);
    }      
  }, [selectedPokemonType]); 

  return (
    <div className="px-[50px] lg:px-[100px]">
      <PockemonType typeofPokemon={typeofPokemon} setSlectedPokemonType={setSlectedPokemonType} />
      <Search data={search} setSearch={setSearch} searchControl={searchControl} />
      <div className="grid grid-rows-2 lg:grid-cols-3 lg:gap-4">
        {
          pdataList?.map((data, index) => {
            return (
              <PokemonCard key={index} data={data} />
            )
          })
        }
      </div>

      {/* <div className="my-[20px]">
        <PokemonCard />
      </div> */}
    </div>
  );
}
