import React from 'react';
// A partir das desestruturação não é preciso digitar props.title.
export default function Header({title}){
    return(
        <header>
            <h1> {title} </h1>
        </header>
    );
}