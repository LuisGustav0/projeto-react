import React from 'react';

export default props => (
  <div>
    <h1> Família </h1>
    {
      React.cloneElement(
        props.children, 
        {
          ...props
        }
      )
    }
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