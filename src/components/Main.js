import Score from "./Score";
import ListCards from "./ListCards";
import data from "./data";
import { useEffect, useState } from "react";

const Main = () => {
    const [characters, setCharacters] = useState(data);
    const [pickedCharacters, setPickedCharacters] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setCharacters(array);
    };

    useEffect(() => {
        shuffle([...data]);
    }, []);

    const handleClick = (event, name) => {
        if (pickedCharacters.includes(name)) {
            setScore(0);
            setPickedCharacters([]);
        } else {
            setScore(score + 1);
            setPickedCharacters([...pickedCharacters, name]);
        }
        shuffle([...characters]);
    };

    useEffect(() => {
        if (score > bestScore) setBestScore(score);
        console.log("Set High");
    }, [score, bestScore]);

    return (
        <div className="main-container">
            <Score score={score} bestScore={bestScore} />
            <ListCards characters={characters} handleClick={handleClick} />
        </div>
    );
};

export default Main;
