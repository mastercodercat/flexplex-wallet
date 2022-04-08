import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import MyCollection from "../components/MyCollection";


const navigation = [
  { name: 'My Collection', href: '/home', active: true },
  { name: 'Swap', href: '/swap', active: false },
  { name: 'Activity', href: '/activity', active: false },
  { name: 'Settings', href: '/settings', active: false },
]

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Gameplex</title>
      </Head>
      <div className='w-full min-h-screen'>
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        {/* Divider */}
        <div className='w-full h-px bg-[#272727]'></div>

        {/* Divide into two sections */}
        <div className='flex flex-col md:flex-row'>
          {/* Left section */}
          <div className='w-full md:w-[30%]'>
            <div className='flex flex-col md:flex-row'>
              <div className='mx-auto'>
                Assets Side
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='w-px min-h-screen bg-[#272727]'></div>

          {/* Right section */}
          <div className='w-full md:w-[70%]'>
            {/* Grid of Cards */}
            <MyCollection Collection={[]}></MyCollection>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
