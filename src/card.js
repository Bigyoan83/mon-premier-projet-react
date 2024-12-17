//Définir une carte

import './card.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Card = ({ value, etat }) => {
    const [val, setVal] = useState(etat)
    const onClickBtn = () => {
        setVal (val === false ? true : false);
    }
    useEffect(() => {
        if (val===false){
            console.log("false")
        } else {
            console.log("true")
        }
    })

    const zizi
    return (
        <div className="card">
            {value}
            <button onClick={() => onClickBtn()}>Click{val}</button>
        </div>
    )
}
export default Card;

