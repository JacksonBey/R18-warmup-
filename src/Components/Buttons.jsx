import React from "react";
import { useState, useEffect } from "react";


const Buttons = () => {

    const [buttonState, setButtonState] = useState(0);
    const [otherState, setOtherState] = useState("a");

    const handleAsyncUpdate = () => {
        setTimeout(() => {
            setButtonState(prev => prev + 1);
            setOtherState(prev => prev + 'b');
        }, 100);
    };

    useEffect(() => {
        console.log('rerendered with these states: ', buttonState, otherState)
    })

    return (
        <div>
            <p>num state: {buttonState}</p>
            <p>string state: {otherState}</p>
            <button onClick={() => setButtonState(prev => prev + 1)}>Number +</button>
            <button onClick={() => setOtherState(prev => prev + "b")}>string +</button>
            <button onClick={handleAsyncUpdate}>Async Update</button>
        </div>
    )
}

export default Buttons;