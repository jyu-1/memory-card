import Cards from "./Cards";

const ListCards = (props) => {
    return (
        <div className="list-cards">
            <div className="top-row">
                <Cards character={"Luffy"} />
                <Cards character={"Zoro"} />
                <Cards character={"Nami"} />
                <Cards character={"Usopp"} />
                <Cards character={"Sanji"} />
            </div>
            <div className="bot-row">
                <Cards character={"Chopper"} />
                <Cards character={"Robin"} />
                <Cards character={"Franky"} />
                <Cards character={"Brook"} />
                <Cards character={"Jinbe"} />
            </div>
        </div>
    );
};

export default ListCards;
