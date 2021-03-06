import React from 'react';

import Filho from './filho';

export default props => {
  const notificarSaidaDoFilho = lugar => {
    alert(`Liberado para ${lugar}`);
  }

  return (
    <div>
      <Filho 
        notificarSaida={ notificarSaidaDoFilho } />
    </div>
  )
}