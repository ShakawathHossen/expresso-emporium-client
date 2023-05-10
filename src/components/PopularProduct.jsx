import React from 'react';

const PopularProduct = ({coffee}) => {
    return (
        <div>
            <div >
      <div className="bg-[#F4F3F0] p-4 shadow-md rounded-lg ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src={coffee.photo}
              alt="Card Image"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <p className="text-lg font-semibold">Name: {coffee.name}</p>
            <p className="text-lg font-semibold">Chef: {coffee.chef}</p>
            <p className="text-lg font-semibold">Category: {coffee.category}</p>
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <button className="py-2 px-4 mb-2">
             <img src="https://i.ibb.co/n1qkQJP/view-Button.png" alt="" />
            </button>
            <button className="py-2 px-4 mb-2">
              <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
            </button>
            <button className="py-2 px-4">
              <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
            </button>
          </div>
          </div>
          </div>
    </div>
            
        </div>
    );
};

export default PopularProduct;