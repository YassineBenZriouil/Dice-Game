import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Intro() {
    const [number, setNumber] = useState("");

    return (
        <div className="main_intro">
            <h1>Welcome to the Dice Game</h1>
            <h3>Whoever Rolls the Number first is the Winner</h3>
            <h3>Please choose your Number</h3>
            <input
                type="number"
                id="nbr"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />{" "}
            <br />
            <Link to={`/game/${number}`}>
                <button className="button">Start</button>
            </Link>
        </div>
    );
}

export default Intro;
