import React from "react";

function PokemonCards({ pokemonData }) {
  return (
    <li className="w-4/5 m-auto h-80 p-4 cursor-default rounded-lg shadows duration-700 hover:shadow-2xl">
      <figure className="m-auto">
        <img
          className="w-36 h-28 m-auto "
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>
      <div className="flex flex-col justify-end leading-7 text-center ">
      <div className="my-6 py-1 color">
        <p className="bg-color font-cursive font-cursive text-slate-100 text-center text-2xl capitalize">
          {pokemonData.types.map((currType) => currType.type.name).join(", ")}
        </p>
      </div>
      <div className="grid grid-cols-3 justify-center color">
        <p>
          <span>Height: </span>
          {pokemonData.height}
        </p>
        <p>
          <span>Weight: </span>
          {pokemonData.weight}
        </p>
        <p>
          <span>speed: </span>
          {pokemonData.stats[5].base_stat}
        </p>
        </div>
        <div className="grid grid-cols-3 justify-center color">
            <div>
                <p>
                    {pokemonData.base_experience}
                    
                </p>
                <span>Experience: </span>
            </div>
            <div>
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack: </span>
        </div>
        <div>
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span>Abilities: </span>
        </div>
      </div>
      </div>
    </li>
  );
}

export default PokemonCards;
