import React from 'react';
import { Navbar } from './navbar/Navbar';

function NavBar({navigation, showBrand}) {
  return (
    <Navbar fluid>
        <Navbar.Brand href="/home">
        {(() => {
            if (showBrand) {
                return <div className='flex flex-row w-10 justify-start'>
                    <img src="/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Gameplex Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Gameplex</span>
                </div>;
            }
        })()}
        </Navbar.Brand>
        <div className="flex md:order-2">
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
