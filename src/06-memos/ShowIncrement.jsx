import { memo } from "react";


export const ShowIncrement = ({ increment }) => {

    console.log('me volvi a generara :(');


    return (

        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);

            }}
        >
            Incrementar
        </button>


    )
}

