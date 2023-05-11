import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-center bg-cover mt-16" style={{backgroundImage: "url(https://i.ibb.co/x7dbzsx/13.jpg)"}}>
        <div className="w-9/12 mx-auto py-16">
          <div className="flex flex-wrap">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <div className="flex md:flex-col mb-4 items-center md:items-start">
                <img
                  className="w-16 h-16 mb-2"
                  src="https://i.ibb.co/dtHGBM8/logo1.png"
                  alt="Logo"
                />
                <div> <img src="https://i.ibb.co/4VZDNBW/Group-23.png" alt="" /> </div>
              </div>
              <div className='flex gap-4 mb-6 justify-center md:justify-start'>
                <img src="https://i.ibb.co/b2XfjGF/facebook-3-2-1.png" alt="" />
                <img src="https://i.ibb.co/tMnBgdB/Group-24.png" alt="" />
                <img src="https://i.ibb.co/KbsSjP5/Group-26.png" alt="" />
                <img src="https://i.ibb.co/m8m9nkq/Group-25.png" alt="" />
                
              </div>
              <div>
                <p className='font-[Rancho] text-4xl pb-4'>Get in touch</p>
                <p className='pb-2'>Phone: 123-456-7890</p>
                <p className='pb-2'>Email: info@example.com</p>
                <p>Address: 123 Street, City, Country</p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="w-full md:w-1/2">
              <p className='font-[Rancho] text-4xl pb-4'>Connect with us</p>
              <form>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded-md"
                    type="text"
                    id="name"
                    name="name" placeholder='Name'
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded-md"
                    type="email"
                    id="email"
                    name="email" placeholder='Email'
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-3 py-2 border rounded-md"
                    id="message"
                    name="message"
                    rows="4" placeholder='Message'
                    required
                  ></textarea>
                </div>
                <button
                  className=" px-6 border-2  border-[#331A15] py-2 rounded-full"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;