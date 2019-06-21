import React, { 
  useState, 
  useEffect 
} from 'react';

export default props => {
  const CONTER_IMPAR = 'Impar';
  const CONTER_PAR = 'Par';

  const [conter, setCounter] = useState(1);
  const [parOrImpar, setParOrImpar] = useState(CONTER_IMPAR);

  useEffect(() => {
    conter % 2 === 0 ? setParOrImpar(CONTER_PAR) : setParOrImpar(CONTER_IMPAR);
  });

  return (
    <h1>
      <p>
        Number:
        <strong>
          {conter} ({ parOrImpar })
        </strong>
      </p>

      <button
          onClick={ () => setCounter(conter + 1) }>
        Increment
      </button>

      <button
          onClick={ () => setCounter(conter - 1) }>
        Decrement
      </button>
    </h1>
  )
}