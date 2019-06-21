import React from 'react';

const listaAprovado = [
  'Luis',
  'Thais',
  'Andre'
];

export default props => {
  const gerarItens = itens => {
    return itens.map(item => (
      <li>
        { item }
      </li>
    ))
  }

  return (
    <ul>
      { gerarItens(listaAprovado) }
    </ul>
  )
}