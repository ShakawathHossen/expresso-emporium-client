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
            <div className='container mx-auto'>
            <div className='text-center'>
            <h1 className='text-3xl font-[Rancho]'>Our Popular Coffee</h1>
            <button>Add Coffee</button>
            </div>
            <div className="grid md:grid-cols-2 gap-4 ">
            {
                coffees.map((coffee) =><PopularProduct key={coffee._id} coffee={coffee}></PopularProduct>)
            }
            </div>
            </div>
        </div>
    );
};

export default Banner;