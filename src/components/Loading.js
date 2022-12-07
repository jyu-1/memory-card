import loading from "../assets/loading.gif";

const Loading = () => {
    return (
        <div className="loading">
            <img src={loading} alt="loading" />
            <div>Loading</div>
        </div>
    );
};

export default Loading;
