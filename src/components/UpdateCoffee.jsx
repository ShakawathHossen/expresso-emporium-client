import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee= useLoaderData();
    const { _id, photo, name, chef, category,supplier,taste,details } = coffee;


    const handleUpdateCoffee=event=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const updatedCoffee={name,chef,supplier,taste,category,details,photo}
        console.log(updatedCoffee)

        // send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Coffee Updated Successfully !',
                    text: 'Explore the New Coffee',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
        })

    }








    return (
        <div>
        <div className='container mx-auto '>
        <Link to={'/'}>
          <button className='font-[Rancho] pb-8'>Back to home</button>
          </Link>

           <div className='bg-[#F4F3F0] px-16 py-12'>
           <div className='text-center px-16 py-8 '>
                <h1 className='text-3xl font-[Rancho]'>Update Existing Coffee Details</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1">Name</label>
                            <input id="name" type="text" name="name" required placeholder='Enter coffee name' defaultValue={name} className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="chef" className="mb-1">Chef</label>
                            <input id="chef" name="chef" required placeholder='Enter coffee chef' defaultValue={chef} type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="supplier" className="mb-1">Supplier</label>
                            <input id="supplier" name="supplier" required placeholder='Enter coffee supplier' defaultValue={supplier} type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="taste" className="mb-1">Taste</label>
                            <input id="taste" name="taste" required placeholder='Enter coffee taste' defaultValue={taste} type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="category" className="mb-1">Category</label>
                            <input id="category"  name="category" required placeholder='Enter coffee category' defaultValue={category} type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <label htmlFor="details" className="mb-1">Details</label>
                            <input id="details"  name="details" required placeholder='Enter coffee details' defaultValue={details} type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="photoUrl" className="mb-1">Photo</label>
                    <input id="photoUrl" name="photo" required placeholder='Enter photo URL' defaultValue={photo} type="text" className="w-full px-4 py-2 border rounded" />
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 text-[#331A15] bg-[#D2B48C] rounded font-[Rancho] font-bold">Update Coffee Details</button>
                </div>
            </form>
           </div>
        </div>

    </div>
    );
};

export default UpdateCoffee;