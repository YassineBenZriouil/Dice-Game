import React, { useState } from "react";
import "./app.css";

function App({ targetValue }) {
    const randGenerator = () => Math.floor(Math.random() * 6) + 1;

    const imageConcerned = (number) => {
        switch (number) {
            case 1:
                return "https://www.svgrepo.com/show/334601/dice-1.svg";
            case 2:
                return "https://www.svgrepo.com/show/344130/dice-2-fill.svg";
            case 3:
                return "https://www.svgrepo.com/show/322175/dice-six-faces-three.svg";
            case 4:
                return "https://www.svgrepo.com/show/322172/dice-six-faces-four.svg";
            case 5:
                return "https://www.svgrepo.com/show/499117/dice-five.svg";
            default:
                return "https://www.svgrepo.com/show/499120/dice-six.svg";
        }
    };

    const [randomNumber, setRandomNumber] = useState(randGenerator());
    const [imageSrc, setImageSrc] = useState(imageConcerned(randomNumber));
    const [fade, setFade] = useState(false);

    const handleClick = () => {
        setFade(true);
        setTimeout(() => {
            const newNumber = randGenerator();
            setRandomNumber(newNumber);
            setImageSrc(imageConcerned(newNumber));
            setFade(false);
        }, 300);
    };

    const initialize = () => {
        setRandomNumber(0);
        setImageSrc(
            "https://www.cranfield-colours.co.uk/wp-content/uploads/2022/01/cranfield-traditional-etching-ink-mid-black.jpg"
        );
    };

    return (
        <>
            <div className="main_div">
                <img
                    className={`img ${fade ? "fade-out" : "fade-in"}`}
                    src={imageSrc}
                    alt="Random Number"
                />
                <h1 className="number" id="number">
                    {randomNumber}
                </h1>
                <button className="button" onClick={handleClick}>
                    Roll The Dice
                </button>
                <button className="button" onClick={initialize}>
                    Initialize
                </button>
            </div>{" "}
            {randomNumber === targetValue && (
                <p className="congratulations">
                    Congratulations! You Found The Secret Number
                </p>
            )}
        </>
    );
}

export default App;
