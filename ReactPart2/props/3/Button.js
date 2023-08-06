import React from 'react';

function Button(props){
    return(
        <button onClick={props.handleClick} >
            Click me!
        </button>
    )
}


export default Button;