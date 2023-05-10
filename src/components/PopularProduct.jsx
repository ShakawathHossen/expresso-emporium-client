import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PopularProduct = ({ coffee,setCoffees,coffees }) => {
    const { _id, photo, name, chef, category } = coffee;

    const hanleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'want to DELETE this Coffee?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                console.log("delete confirmed");
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                              )
                              const remaining = coffees.filter(c=>c._id !== _id)
                              setCoffees(remaining);
                        }
                    });

            }
        })

    }





    return (
        <div>
            <div >
                <div className="bg-[#F4F3F0] p-4 shadow-md rounded-lg ">
                    <div className="grid grid-cols-6 justify-items-center">
                        <div className="col-span-2">
                            <img
                                src={photo}
                                alt="Card Image"
                                className="w-full h-auto rounded"
                            />
                        </div>
                        <div className="col-span-3 flex flex-col items-center md:items-start justify-center">
                            <p className="text-sm font-semibold">Name: {name}</p>
                            <p className="text-sm font-semibold">Chef: {chef}</p>
                            <p className="text-sm font-semibold">Category: {category}</p>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <Link to={`viewCoffee/${_id}`}>
                            <button className="py-2 px-4 mb-2">
                                <img src="https://i.ibb.co/n1qkQJP/view-Button.png" alt="" />
                            </button>
                            </Link>
                            <Link to={`updateCoffee/${_id}`}>
                            <button className="py-2 px-4 mb-2">
                                <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
                            </button>
                            </Link>
                            <button onClick={() => hanleDelete(_id)} className="py-2 px-4">
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