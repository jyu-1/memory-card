import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <div className="App">
            <Header />
            {open ? <Main /> : null}
            <Footer />
        </div>
    );
}

export default App;
