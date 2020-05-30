import React from 'react';
import '/USerOutput.css';
const UserOutput = (props)=>{
    return(
        <div className="UserOutput">
            <p>Hi, My name is {props.name} and I am learning React.
            This is my first assignment.</p>
            <p>I hope to hone my react Skills and impress everyone at my work.</p>
        </div>
    )
};

export default UserOutput;