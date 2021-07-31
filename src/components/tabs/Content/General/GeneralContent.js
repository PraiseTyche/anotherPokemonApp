import React, { useState } from "react";
import styles from "./GeneralContent.module.css";
import Modal from "../../../modal.js";
import {
  pokemonTypes,
  backgroundColors,
} from "../../../../helper/pokemonIcons";

const GeneralContent = ({ pokemon }) => {
  const [selectedIMG, setSelectedIMG] = useState(null);
  const backgroundColour = backgroundColors[pokemon.types[0].toLowerCase()];
  const onImageSelect = (imgSRC) => {
    setSelectedIMG(imgSRC);
  };

  return (
    <div className={styles.contentContainer}>
      {selectedIMG && (
        <Modal
          imgSrc={selectedIMG}
          bgColor={backgroundColour}
          setSelectedIMG={setSelectedIMG}
        />
      )}
      <h1 className={styles.pokemonNameHeader}>{pokemon.name}</h1>
      <p className={styles.pokemonDescription}>{pokemon.description}</p>
      <div className={styles.iconContentContainer}>
        <div>
          <h3 className={styles.iconHeader}>Types:</h3>
        </div>
        <div className={styles.pokemonTypeContainer}>
          {pokemon.types.map((type) => {
            let _type = type.toLowerCase();
            return (
              <div
                className={styles.iconContainer}
                key={type}
                style={{ background: `${backgroundColors[_type]}` }}
              >
                <img src={pokemonTypes[_type]} alt={`${type} logo`} />
                <span>{type}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.spritesContentContainer}>
        <h3>Sprites:</h3>

        <div className={styles.formatSpriteContainer}>
          <div
            className={styles.spritesContainer}
            style={{
              background: `${backgroundColors[pokemon.types[0].toLowerCase()]}`,
            }}
            onClick={() => onImageSelect(pokemon.pixelImageFront)}
          >
            <img src={pokemon.pixelImageFront} />
          </div>
          <div
            className={styles.spritesContainer}
            style={{
              background: `${backgroundColors[pokemon.types[0].toLowerCase()]}`,
            }}
            onClick={() => onImageSelect(pokemon.pixelImageBack)}
          >
            <img src={pokemon.pixelImageBack} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;
