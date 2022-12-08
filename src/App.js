import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadTimeOut() {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

        window.addEventListener("load", loadTimeOut);

        return () => {
            window.removeEventListener("load", loadTimeOut);
        };
    }, []);

    return (
        <div className="App">
            <Header />
            {loading ? <Loading /> : <Main />}
            <Footer />
        </div>
    );
}

export default App;
