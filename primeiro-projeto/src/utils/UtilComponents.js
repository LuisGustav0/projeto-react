import React from 'react';

export const filhosComProps = props => {
  return React.Children.map(props.children, filho => {
    return React.cloneElement(filho, {
      ...props
    });
  })
}