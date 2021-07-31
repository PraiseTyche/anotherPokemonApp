const backgroundColors = {
  bug: "#819A29",
  dark: "#375E67",
  dragon: "#375E67",
  ghost: "#64539C",
  rock: "#906543",
  steel: "#8D8BA7",
  flying: "#799FF1",
  water: "#649EE2",
  ice: "#68D4E7",
  grass: "#5D836A",
  fire: "#F08353",
  electric: "#EFBD34",
  normal: "#ADA184",
  fighting: "#79322D",
  fairy: "#F682E7",
  psychic: "#EF4D83",
  poison: "#823E9F",
  ground: "#B58E49",
};

export const formatPokemon = (details, species, type) => {
  let {
    abilities,
    height,
    id,
    name: pokeName,
    types,
    weight,
    sprites,
    stats,
  } = details;

  let formattedID = id.toString().padStart(3, "0");
  //formatted name
  let pokemonName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

  //formattedWeight
  let pokemonWeight = Math.round(((weight * 0.220462 + 0.0001) * 100) / 100);

  //formatted height
  let pokemonHeight = Math.round(((height * 0.328084 + 0.0001) * 100) / 100);

  //formatted types
  let pokemonTypes = types.map((item) => {
    return item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1);
  });

  let backgroundColor = backgroundColors[pokemonTypes[0].toLowerCase()];
  let pokemonAbilities = abilities.map((ability) =>
    ability.ability.name
      .toLowerCase()
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ")
  );

  let imageURL = sprites.other["official-artwork"].front_default;

  let pixelImageFront = sprites.front_default;
  let pixelImageBack = sprites.back_default;
  let hp, attack, defense, speed, specialAttack, specialDefense;

  let statsArray = stats.map((stat) => {
    switch (stat.stat.name) {
      case "hp":
        hp = stat["base_stat"];
        break;
      case "attack":
        attack = stat["base_stat"];
        break;
      case "defense":
        defense = stat["base_stat"];
        break;
      case "speed":
        speed = stat["base_stat"];
        break;
      case "special-attack":
        specialAttack = stat["base_stat"];
        break;
      case "special-defense":
        specialDefense = stat["base_stat"];
        break;
    }
  });

  let {
    egg_groups,
    base_happiness: happiness,
    growth_rate,
    flavor_text_entries,
    hatch_counter,
    names,
    capture_rate,
    gender_rate: femaleRate,
  } = species;

  let descriptionFind = flavor_text_entries.find((descript) => {
    return descript.language.name === "en";
  });
  let description = descriptionFind.flavor_text;
  let genderRationFemale = 0;
  let genderRationMale = 0;

  if (femaleRate !== -1) {
    genderRationFemale = Math.ceil(12.5 * femaleRate);
    genderRationMale = Math.ceil(12.5 * (8 - femaleRate));
  }

  let findJapaneseName = names.find((name) => {
    return name.language.name === "ja";
  });
  let japaneseName = findJapaneseName.name;

  let hatchCounter = 255 * (hatch_counter + 1);

  const eggGroups = egg_groups.map((group) => {
    if (group.name.includes("water")) {
      return "Water";
    }
    return group.name.charAt(0).toUpperCase() + group.name.slice(1);
  });

  return {
    name: pokemonName,
    weight: pokemonWeight,
    height: pokemonHeight,
    id,
    formattedID,
    types: pokemonTypes,
    backgroundColor,
    pokemonAbilities,
    imageURL,
    pixelImageFront,
    pixelImageBack,
    femaleRate,
    stats: {
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
    },
    description,
    genderRationFemale,
    genderRationMale,
    japaneseName,
    hatchCounter,
    eggGroups,
    growthRate: growth_rate.name,
    happiness,
    captureRate: capture_rate,
    typeDetails: {
      type,
    },
  };
};
