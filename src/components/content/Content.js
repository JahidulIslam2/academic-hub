import React from 'react';

const Content = (props) => {
    const {name,picture,timer,email,key}=props
    return (
        <div>
            <img src={picture} alt="" srcset="" />
            <h2>{name}</h2>
            <p>{timer}</p>
            <p>{email}</p>

        </div>
    );
};

export default Content;