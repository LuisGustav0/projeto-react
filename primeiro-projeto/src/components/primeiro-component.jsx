import React from 'react';

let isLegal = false;

export default (props) => (
    <div>
        <h1> {props.value} </h1>
        <h2> {1 + 1} </h2>
        <p> Legal? { isLegal ? 'Sim' : 'Não' } </p>
        <p> Tudo bem? { props.isOk ? 'Sim' : 'Não' } </p>
        <p> { Math.random() } </p>
    </div>
)

// export default () => return <h1> Primeiro Componnet! </h1>;

// export default function() {
//     return <h1> Primeiro Componnet! </h1>;
// }

// function primeiro() {
//     return <h1> Primeiro Componnet! </h1>;
// }

// export default primeiro;