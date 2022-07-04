import { useState } from "react";



export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value=1) => {

        setCounter(counter + value);
    }

        const decrement = (value) => {
            //para que no baje de cero
            if (counter===0)return;
            setCounter(counter - value);
        }

        const reset = () => {
            setCounter(initialValue);
        }
    


    return {

        counter,
        increment,
        decrement,
        reset,
    }

}