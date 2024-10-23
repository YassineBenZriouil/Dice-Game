import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function App() {
    const { targetValue } = useParams(); // Get targetValue from URL
    const randGenerator = () => Math.floor(Math.random() * 6) + 1;

    const imageConcerned = (number) => {
        switch (number) {
            case 1:
                return "https://www.calculator.net/img/dice1.png";
            case 2:
                return "https://www.calculator.net/img/dice2.png";
            case 3:
                return "https://www.calculator.net/img/dice3.png";
            case 4:
                return "https://www.calculator.net/img/dice4.png";
            case 5:
                return "https://www.calculator.net/img/dice5.png";
            default:
                return "https://www.calculator.net/img/dice6.png";
        }
    };

    const [randomNumber, setRandomNumber] = useState(0);
    const [imageSrc, setImageSrc] = useState(
        "https://www.cranfield-colours.co.uk/wp-content/uploads/2022/01/cranfield-traditional-etching-ink-mid-black.jpg"
    );
    const [fade, setFade] = useState(false);

    // Initialize function to reset to 0
    const initialize = () => {
        setRandomNumber(0);
        setImageSrc(
            "https://www.cranfield-colours.co.uk/wp-content/uploads/2022/01/cranfield-traditional-etching-ink-mid-black.jpg"
        );
    };

    // useEffect to run initialize when component mounts
    useEffect(() => {
        initialize(); // Set the number to 0 when the component loads
    }, []);

    const handleClick = () => {
        setFade(true);
        setTimeout(() => {
            const newNumber = randGenerator();
            setRandomNumber(newNumber);
            setImageSrc(imageConcerned(newNumber));
            setFade(false);
        }, 300);
    };

    return (
        <div className="main_app_div">
            <div className="main_div">
                <img className="img" src={imageSrc} alt="Random Number" />
                <h1 className="number" id="number">
                    {randomNumber}
                </h1>
                <button className="button" onClick={handleClick}>
                    Roll The Dice
                </button>{" "}
                <button className="button" onClick={initialize}>
                    Initialize
                </button>
            </div>
            <div className="congrats_div">
                {randomNumber === parseInt(targetValue) && (
                    <p className="congratulations">Congratulations! </p>
                )}
            </div>
        </div>
    );
}

export default App;
