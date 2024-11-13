import React, { useState } from 'react';
import './MemoryGame.css';

const MemoryGame = () => {
  // Initialisation des valeurs des cartes (8 paires pour un total de 16 cartes)
  const cardValues = ["1", "2", "3", "4", "5", "6", "7", "8"];
  // Création du tableau des cartes avec des paires correspondantes et état "face cachée"
  const initialCards = shuffleCards(
    cardValues.concat(cardValues).map((value, index) => ({
      id: index,
      value,
      flipped: false,
    }))
  );

  const [cards] = useState(initialCards);

  return (
    <div className="memory-game">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

// Fonction pour mélanger les cartes de façon aléatoire
const shuffleCards = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

// Composant pour chaque carte
const Card = ({ card }) => (
  <div className={`card ${card.flipped ? 'flipped' : ''}`}>
    {card.flipped ? card.value : ""}
  </div>
);

export default MemoryGame;
