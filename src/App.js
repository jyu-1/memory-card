import "./styles/styles.css";
import logo from "./assets/logo.png";

function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} alt="logo" height="200px"></img>
            </header>
            <main></main>
            <footer>
                <span>
                    Copyright © 2022{" "}
                    <a
                        href="https://github.com/jyu-1/memory-card"
                        title="github link to this project"
                    >
                        jyu-1
                    </a>
                </span>
            </footer>
        </div>
    );
}

export default App;
