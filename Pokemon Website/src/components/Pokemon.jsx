import React, { useEffect, useState } from "react";
import PokemonCards from './PokemonCards'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit-124");
      const data = await res.json();
      // console.log(data);

      const detailedPokemonData = data.results.map(async(currPokemon)=>{
        const res = await fetch(currPokemon.url)
        const data = await res.json();
        return data;
      })
      // console.log(detailedPokemonData)
      const detailedResponses = await Promise.all(detailedPokemonData)
      // console.log(detailedResponses);
      setPokemon(detailedResponses)
      setLoding(false)
    } catch (error) {
      console.log(error)
      setLoding(false)
      setError(error)
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((currPokemon)=> currPokemon.name.toLowerCase().includes(search.toLowerCase()))


  if(loading){
    return(
      <div className="text-6xl text-center my-52 font-mono">Loading....</div>
    )
  }
  if(error){
    return(
      <div className="text-4xl text-center my-52">{error.message}</div>
    )
  }
 
  return (
    <section >
      <header className="text-center colorss mt-3 text-5xl font-bold">
        <h1>Lets Catch Pokemon</h1>
      </header>
      <div className="m-auto my-5 mb-8 w-1/4" id="inputbox">
        <input className="text-black font-cursive bgColors w-full p-1 px-2 outline-none border-none" type="text" placeholder="Search Pokemon" value={search} onChange={(e)=> {setSearch(e.target.value)}}/>
      </div>
      <ul className="grid grid-cols-3 justify-center gap-7" id="responsive">
        {
          searchData.map((currPokemon)=>{
            return(
        <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
         )
        })
}
      </ul>
    </section>
  );
}
export default App;
