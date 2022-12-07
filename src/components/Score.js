const Score = (props) => {
    return (
        <div className="score">
            <div>Current Score: {props.score}</div>
            <div>Best Score: {props.bestScore}</div>
        </div>
    );
};

export default Score;
