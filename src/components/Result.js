const Result = (props) => {
    return (
        <div className="result">
            <div>
                {props.score >= 10
                    ? `You've Won! Your Score is: ${props.score}`
                    : `You've Lost! Your Score is: ${props.score}`}
            </div>
            <button onClick={props.resetGame}>Play Again</button>
        </div>
    );
};

export default Result;
