import React from 'react';
import { filhosComProps } from '../../utils/UtilComponents'

export default props => (
  <div>
    <h1> Família </h1>
    {
      filhosComProps(props)
    }
    {/* {
      React.cloneElement(
        props.children, 
        {
          ...props
        }
      )
    } */}
    {/* {
      React.cloneElement(
        props.children, 
        props
      )
    } */}
    {/* { 
           React.cloneElement(
            props.children,
            {
              lastName: props.lastName
            }
           ) 
        } */}

    {/* { props.children } */}
  </div>
)