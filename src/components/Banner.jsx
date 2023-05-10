import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PopularProduct from './PopularProduct';

const Banner = () => {
    const coffees= useLoaderData();
    return (
        <div>
            Banner
            <h2>New Added Coffee: {coffees.length}</h2>
            {/* map all coffes data  */}
            {
                coffees.map((coffee) =><PopularProduct key={coffee._id} coffee={coffee}></PopularProduct>)
            }
        </div>
    );
};

export default Banner;