import React from 'react';
import { useSelector } from 'react-redux'

const Details = (props) => {

    const name = useSelector(store => store.name)
    const age = useSelector(store => store.age)
    const location = useSelector(store => store.location)

  return (
    <div>
        <h1>Name: <h2>{name}</h2></h1>
        <h1>Age: <h2>{age}</h2></h1>
        <h1>Location: <h2>{location}</h2></h1>
    </div>
    )
};

export default Details;
