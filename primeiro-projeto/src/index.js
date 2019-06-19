import React from 'react';
import ReactDOM from 'react-dom';

const element = document.getElementById('root');

ReactDOM.render(
    <h1> Ola Mundo </h1>, element
);

const lista = document.getElementById('ul');

let item = document.createElement('li');
let texto = document.createTextNode('1) Luis');

item.appendChild(texto);
lista.appendChild(item);