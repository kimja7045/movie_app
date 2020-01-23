import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
    return (
        <>
            <HashRouter>
                <Navigation />
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                {/* <Route path="/movie-datail" component={Detail} /> */}
                <Route path="/movie/:id" component={Detail} />
            </HashRouter>
            {/* footer */}
        </>
    );
}

export default App;