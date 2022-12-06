import Score from "./Score";
import ListCards from "./ListCards";
import data from "./data";

const Main = () => {
    const characters = data;

    return (
        <div className="main-container">
            <Score />
            <ListCards chars={characters} />
        </div>
    );
};

export default Main;