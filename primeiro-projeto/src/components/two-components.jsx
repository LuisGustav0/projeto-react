import React from 'react';

const ComponentA = props => (
    <h1> One Component diz: {props.value}  </h1>
)

const ComponentB = props => (
    <h1> Two Component diz: {props.value}  </h1>
)

export { ComponentA, ComponentB }