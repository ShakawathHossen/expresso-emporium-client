import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="bg-cover bg-center py-4" style={{ backgroundImage: 'url(https://i.ibb.co/hmnMjRc/15.jpg)' }}>
                <div className="container mx-auto flex items-center justify-center">
                    <div className="text-white font-bold text-xl">
                        <img className='w-56' src="https://i.ibb.co/hmqtjks/logo.png" alt="" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;