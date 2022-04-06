import React from 'react';
import Link from 'next/link';
import { FC } from 'react';
import { Navbar } from './navbar/Navbar';

function NavBar() {
  return (
    <Navbar fluid>
        <Navbar.Brand href="https://flowbite.com/">
            <div className='flex flex-row w-96 justify-center'>
                <img src="/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Gameplex Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Gameplex</span>
            </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
            {/* <button>Get started</button> */}
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link href="#/navbars" active>My Collection</Navbar.Link>
            <Navbar.Link href="#/navbars">Swap</Navbar.Link>
            <Navbar.Link href="#/navbars">Activity</Navbar.Link>
            <Navbar.Link href="#/navbars">Settings</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>

  );
}

export default NavBar;
