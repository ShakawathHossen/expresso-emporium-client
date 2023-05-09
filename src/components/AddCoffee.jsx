import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee=event=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const newCoffe={name,chef,supplier,taste,category,details,photo}
        console.log(name,chef,supplier,taste,category,details,photo,newCoffe)
    }
    return (
        <div>
            <div className='container mx-auto '>
                <button>Back to home</button>

               <div className='bg-[#F4F3F0] px-16 py-12'>
               <div className='text-center px-16 py-8 '>
                    <h1 className='text-3xl font-[Rancho]'>Add New Coffee</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="mb-1">Name</label>
                                <input id="name" type="text" name='name' required placeholder='Enter coffee name' className="px-4 py-2 border rounded" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="chef" className="mb-1">Chef</label>
                                <input id="chef" name='chef' required placeholder='Enter coffee chef' type="text" className="px-4 py-2 border rounded" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="supplier" className="mb-1">Supplier</label>
                                <input id="supplier" name='supplier' required placeholder='Enter coffee supplier' type="text" className="px-4 py-2 border rounded" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="taste" className="mb-1">Taste</label>
                                <input id="taste" name='taste' required placeholder='Enter coffee taste' type="text" className="px-4 py-2 border rounded" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="category" className="mb-1">Category</label>
                                <input id="category"  name='category' required placeholder='Enter coffee category' type="text" className="px-4 py-2 border rounded" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col">
                                <label htmlFor="details" className="mb-1">Details</label>
                                <input id="details"  name='details' required placeholder='Enter coffee details' type="text" className="px-4 py-2 border rounded" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="photoUrl" className="mb-1">Photo</label>
                        <input id="photoUrl" name='photo' required placeholder='Enter photo URL' type="text" className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mt-4">
                        <button className="w-full px-4 py-2 text-[#331A15] bg-[#D2B48C] rounded font-[Rancho] font-bold">Add Coffee</button>
                    </div>
                </form>
               </div>
            </div>

        </div>
    );
};

export default AddCoffee;