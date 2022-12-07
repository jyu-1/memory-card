import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => setLoading(false), 2000);
        return () => {
            clearTimeout(timer1);
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
