import Score from "./Score";
import ListCards from "./ListCards";
import data from "./data";
import { useEffect, useState } from "react";
import clicked from "../assets/clicked.mp3";
import wrong from "../assets/wrong.mp3";
import Result from "./Result";

const Main = () => {
    const [characters, setCharacters] = useState(data);
    const [pickedCharacters, setPickedCharacters] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [result, setResult] = useState(false);
    const rightAns = new Audio(clicked);
    const wrongAns = new Audio(wrong);

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
            wrongAns.play();
            setResult(true);
        } else {
            rightAns.play();
            setScore(score + 1);
            setPickedCharacters([...pickedCharacters, name]);
        }
        shuffle([...characters]);
    };

    useEffect(() => {
        if (score > bestScore) setBestScore(score);
        if (score >= 10) setResult(true);
    }, [score, bestScore]);

    const resetGame = () => {
        setScore(0);
        setPickedCharacters([]);
        setResult(false);
    };

    return (
        <div className="main-container">
            {!result ? <Score score={score} bestScore={bestScore} /> : null}
            {!result ? (
                <ListCards characters={characters} handleClick={handleClick} />
            ) : (
                <Result score={score} resetGame={resetGame} />
            )}
        </div>
    );
};

export default Main;
