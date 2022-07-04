import { useEffect, useState } from "react";
import { Message } from "./Message";



export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({

        username: 'strider',
        email: 'begoña@google.com',

    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });


    }



    useEffect(() => {
        // console.log('useEffect called');
    }, []);
    //arreglo vacio solo se llama una vez cuando recarga la pagina


    //si quiere que cambie el formulario cuando cambia algo
    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    //dispara cuando se cambia el email, email change y el formchange, ver la doc de react de useEffect
    useEffect(() => {
        // console.log('email changed');
    }, [email]);


    return (

        <>
            <h3>Formulario simple</h3>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2 "
                placeholder="begoña@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />


            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}