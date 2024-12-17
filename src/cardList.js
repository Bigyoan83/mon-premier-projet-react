//Définir la liste des cartes

import Card from './card.js';
import './card.css';

const cardList = [0 , 1 , 2 , 4 ];
//Double les cartes
const dubbleCard = [...cardList, ...cardList]
function List () {
    return (
        <div className='card-list'>
            {dubbleCard.map((element, index) => (
                <div className='color-card' > 
                    <Card key={index} value = {element} etat = {(false)}/>
                </div>
           ))}
        </div>
   );
}

export default List;