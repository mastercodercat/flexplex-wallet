import React from 'react';
import { Navbar } from './navbar/Navbar';

function NavBar({ navigation, showBrand }) {
    return (
        <Navbar fluid>
            <Navbar.Brand href="/home">
                {(() => {
                    if (showBrand) {
                        return <div className='flex flex-row justify-center mx-auto'>
                            <img src="/images/logo.svg" className="pt-1 mr-2 h-4 sm:h-6" alt="Gameplex Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gameplex</span>
                        </div>;
                    }
                })()}
            </Navbar.Brand>

            <div className="flex justify-end md:hidden">
                {/* <button>Get started</button> */}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {navigation.map((item, index) => (
                    <Navbar.Link key={index} href={item.href} active={item.active}>{item.name}</Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
