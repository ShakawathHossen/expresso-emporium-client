import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ViewCoffee.css'

const ViewCoffee = () => {
    const coffee = useLoaderData();
    const { _id, photo, name, chef, category, supplier, taste, details } = coffee;
  
    return (
      <div>
        <div className='md:w-9/12 mx-auto'>
          <Link to={'/'}>
          <button className='font-[Rancho] pb-8'>Back to home</button>
          </Link>
  
          <div className='bg-[#F4F3F0] py-8 md:py-12'>
            <div className='grid md:grid-cols-2 md:w-9/12 mx-auto items-center justify-items-center gap-4'>
              <div>
                <img className='zoom-image' src={photo} alt='' />
              </div>
              <div className='text-center md:text-start'>
                <h1 className='text-3xl font-[Rancho] pb-5'>Niceties</h1>
                <p className='pb-2'>
                  <span className='font-bold'>Name</span>: {name}
                </p>
                <p className='pb-2'>
                  <span className='font-bold'>Chef</span>: {chef}
                </p>
                <p className='pb-2'>
                  <span className='font-bold'>Supplier</span>: {supplier}
                </p>
                <p className='pb-2'>
                  <span className='font-bold'>Taste</span>: {taste}
                </p>
                <p className='pb-2'>
                  <span className='font-bold'>Category</span>: {category}
                </p>
                <p>
                  <span className='font-bold'>Details</span>: {details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewCoffee;