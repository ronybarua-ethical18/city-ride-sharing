import React from 'react';

const Details = (props) => {
    const{id, name, image} = props.vehicles;
    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Details;