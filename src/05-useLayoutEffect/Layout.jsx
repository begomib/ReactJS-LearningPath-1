import { useCounter, useFetch, } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';
import { useLayoutEffect, useRef,useState } from 'react';




export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    console.log({ author, quote });





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