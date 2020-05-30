import React from 'react';

const UserInput = (props)=>{
    const styling ={
        backgroundColour: 'yellow'
    }
    return(
    <div>
        <input type="text" onChange={props.changeName} value={props.name} style={styling}/>
    </div>)
};

export default UserInput;