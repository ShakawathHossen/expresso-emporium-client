import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PopularProduct from './PopularProduct';

const Banner = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div>
            {/* banner  */}
            <div className="relative h-screen">
                <div className="absolute inset-0 bg-cover bg-center">
                    <img
                        src="https://i.ibb.co/bJ0Fsg8/3.png"
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="bg-black opacity-50 w-full h-full absolute inset-0"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl text-white font-bold mb-4 font-[Rancho]">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="text-white mb-6 w-2/3 mx-auto text-sm">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='font-[Rancho] bg-[#E2B477] px-3 py-1  text-xl border  border-[#331A15]'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* banner  */}
            {/* map all coffes data  */}
            <div className='container mx-auto'>
                <div className='text-center pb-8'>
                    <h1 className='text-3xl font-[Rancho] md:pt-12 pb-6'>Our Popular Coffee</h1>
                    <Link to={'/addCoffee'}>
                        <button className='font-[Rancho] bg-[#E2B477] px-3 py-1 rounded-md text-xl border  border-[#331A15]'>Add coffee</button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-8 w-10/12 mx-auto ">
                    {
                        coffees.map((coffee) => <PopularProduct key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        >

                        </PopularProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;