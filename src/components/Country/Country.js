import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {name,flags,region,population,area,subregion} = props.country;
    return (
        <div className='country-list'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Populations: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Sub-region: {subregion}</p>
        </div>
    );
};

export default Country;