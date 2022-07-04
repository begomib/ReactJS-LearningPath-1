import { useCounter, useFetch, } from '../hooks';
import { LoadingQuote, Quote } from './';
import { useLayoutEffect, useRef,useState } from 'react';



export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);


    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //doble negacion
    const { author, quote } = !!data && data[0];

    console.log({ author, quote });

    console.log({ data, isLoading, hasError })






    

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />


            {
                isLoading
                    ? <LoadingQuote/>

                    : <Quote author={ author } quote={ quote } />


            }



            <button
                className="btn btn-primary"
                disable={isLoading}
                onClick={() => increment()}>
                Next quote
            </button>


        </>
    )
}