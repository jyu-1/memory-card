import {
    Luffy,
    Zoro,
    Nami,
    Usopp,
    Sanji,
    Chopper,
    Robin,
    Franky,
    Brook,
    Jinbe,
} from "../assets/characters";
import { useState } from "react";

const Cards = (props) => {
    const [character, setCharacter] = useState(props.character);

    console.log(character);

    const characterDisplay = (char) => {
        switch (char) {
            case "Luffy":
                return Luffy;
            case "Zoro":
                return Zoro;
            case "Nami":
                return Nami;
            case "Usopp":
                return Usopp;
            case "Sanji":
                return Sanji;
            case "Chopper":
                return Chopper;
            case "Robin":
                return Robin;
            case "Franky":
                return Franky;
            case "Brook":
                return Brook;
            case "Jinbe":
                return Jinbe;
            default:
                return null;
        }
    };

    return (
        <div className="cards">
            <img src={characterDisplay(props.character)} alt="luffy" />
            <div>{props.character}</div>
        </div>
    );
};

export default Cards;
