import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";



export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow ]= useState(true);



    return (

        <>
            <h1>Counter: <small>{counter} </small></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()}

            >
                +1


            </button>

<button
    className="btn btn-outline-primary"
    
    
    >
    Show/Hide{ JSON.stringify(show)}
</button>
        </>
    )
}