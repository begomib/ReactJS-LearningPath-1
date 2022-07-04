
import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from '../hooks/useForm';                        



export const Form = () => {


    const{formState, onInputChange,username,email,password, onResetForm}=useForm(

        {
    username: '',
    email: '',
    password: ''}
   
    
    );

   // const {username, email, password}= formState;



    

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


            <input
                type="email"
                className="form-control mt-2 "
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />



<button onClick={onResetForm}className="btn btn-primary mt-2">borrar</button>


        </>
    )
}