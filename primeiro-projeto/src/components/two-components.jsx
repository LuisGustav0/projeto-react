import React from 'react';

//export 
const ComponentA = props => (
    <h1> One Component say: {props.value}  </h1>
)

//export 
const ComponentB = props => (
    <h1> Two Component say: {props.value}  </h1>
)

// export default () => {
//     return <p> teste </p>;
// }

export default ComponentA;
export { ComponentA, ComponentB }