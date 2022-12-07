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

const Cards = (props) => {
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
        <div
            className="cards"
            onClick={(event) => props.handleClick(event, props.character.name)}
        >
            <img
                src={characterDisplay(props.character.name)}
                alt="character card"
            />
            <div>{props.character.name}</div>
        </div>
    );
};

export default Cards;
