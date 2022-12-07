import Cards from "./Cards";

const ListCards = (props) => {
    return (
        <div className="list-cards">
            {props.characters.map((e) => {
                return (
                    <Cards
                        character={e}
                        key={e.id}
                        handleClick={props.handleClick}
                    />
                );
            })}
        </div>
    );
};

export default ListCards;
