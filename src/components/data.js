const pokemonData = [
    {
      "name": "Pikachu",
      "type": ["Electric"],
      "stats": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "SpecialAttack": 50,
        "SpecialDefense": 50,
        "Speed": 90
      },
      "abilities": ["Static", "Lightning Rod"],
      "moves": ["Thunderbolt", "Quick Attack", "Iron Tail", "Electro Ball"],
      "imagePath": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
      "name": "Charizard",
      "type": ["Fire", "Flying"],
      "stats": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "SpecialAttack": 109,
        "SpecialDefense": 85,
        "Speed": 100
      },
      "abilities": ["Blaze", "Solar Power"],
      "moves": ["Flamethrower", "Dragon Claw", "Air Slash", "Solar Beam"],
      "imagePath": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
      "name": "Bulbasaur",
      "type": ["Grass", "Poison"],
      "stats": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "SpecialAttack": 65,
        "SpecialDefense": 65,
        "Speed": 45
      },
      "abilities": ["Overgrow", "Chlorophyll"],
      "moves": ["Vine Whip", "Razor Leaf", "Sleep Powder", "Solar Beam"],
      "imagePath": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
      "name": "Gengar",
      "type": ["Ghost", "Poison"],
      "stats": {
        "HP": 60,
        "Attack": 65,
        "Defense": 60,
        "SpecialAttack": 130,
        "SpecialDefense": 75,
        "Speed": 110
      },
      "abilities": ["Cursed Body"],
      "moves": ["Shadow Ball", "Sludge Bomb", "Hypnosis", "Dark Pulse"],
      "imagePath": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
      "name": "Lucario",
      "type": ["Fighting", "Steel"],
      "stats": {
        "HP": 70,
        "Attack": 110,
        "Defense": 70,
        "SpecialAttack": 115,
        "SpecialDefense": 70,
        "Speed": 90
      },
      "abilities": ["Steadfast", "Inner Focus"],
      "moves": ["Aura Sphere", "Close Combat", "Extreme Speed", "Dragon Pulse"],
      "imagePath": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    }
  ];

  const typeofPokemon =["Electric","Fire","Flying","Grass", "Poison","Ghost","Fighting", "Steel"];
  
  export  {pokemonData,typeofPokemon};