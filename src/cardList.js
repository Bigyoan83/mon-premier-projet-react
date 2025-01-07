import Card from './card.js';
import './style/card.css';
import { useState } from 'react';

const cardList = [0, 1, 2, 4];
const dubbleCard = [...cardList, ...cardList];

function List() {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchCard, setMatchCard] = useState([]);
    const [texte, setTexte] = useState(false);

    const onCardFlip = (index, value) => {
        setTexte(false);

        if (flippedCards.length === 0) {
            setFlippedCards([{ index, value }]);
        } else if (flippedCards.length === 1) {
            const newFlippedCards = [...flippedCards, { index, value }];
            setFlippedCards(newFlippedCards);

            if (newFlippedCards[0].value === newFlippedCards[1].value) {
                const matchCardUpdated = [...matchCard, newFlippedCards[0].index, newFlippedCards[1].index];
                setMatchCard(matchCardUpdated);
                setFlippedCards([]);
                setTexte(true);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    const isFlipped = (index) => {
        for (let i = 0; i < flippedCards.length; i++) {
            if (flippedCards[i].index === index) {
                return true;
            }
        }

        for (let i = 0; i < matchCard.length; i++) {
            if (matchCard[i] === index) {
                return true;
            }
        }
        return false;
    };

    return (
        <div className="card-list">
            {dubbleCard.map((value, index) => (
                <div className="color-card" key={index}>
                    <Card
                        value={value}
                        index={index}
                        flipped={isFlipped(index)}
                        onCardFlip={onCardFlip}
                    />
                </div>
            ))}
            <div className='carteMatch'>
                {texte && <div>Carte matchée</div>} 
            </div> 
        </div>

    );
}

export default List;
