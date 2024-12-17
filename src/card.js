//Définir une carte

import './card.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Card = ({ value, index, onCardFlip, flippedCards }) => {
  // Gérer l'état de chaque carte individuellement (retournée ou non)
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (!flipped) {  // Si la carte n'est pas retournée
      setFlipped(true);  // Marquer la carte comme retournée
      onCardFlip(index, value);  // Appeler la fonction pour signaler que la carte a été retournée
    }
  };

  // Afficher un message dans la console chaque fois que l'état de la carte change
  useEffect(() => {
    if (flipped) {
      console.log(`Carte retournée : ${value}`);
    }
  }, [flipped, value]);  // Déclenchement de useEffect lorsque l'état `flipped` change


  return (
    <div className="card" onClick={handleCardClick}>
      {flipped ? value : "?"}
    </div>
  );
};

export default Card;
