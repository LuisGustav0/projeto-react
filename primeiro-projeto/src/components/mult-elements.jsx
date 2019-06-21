import React from 'react';

export default props => [
    <h1> Part 1 </h1>,
    <h2> Part 2 </h2>
]

// Solução 02
// export default props => (
//     <React.Fragment>
//         <h1> Part 1 </h1>
//         <h2> Part 2 </h2>
//     </React.Fragment>
// )

// Solução 01. Mais usada!
// export default props => (
//     <div>
//         <h1> Part 1 </h1>
//         <h2> Part 2 </h2>
//     </div>
// )