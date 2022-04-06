import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import MyCollection from "../components/MyCollection";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Gameplex</title>
      </Head>
      <div className='w-full min-h-screen'>
        {/* Navbar */}
        <NavBar></NavBar>

        {/* Divider */}
        <div className='w-full h-px bg-[#272727]'></div>

        {/* Divide into two sections */}
        <div className='flex flex-col md:flex-row'>
          {/* Left section */}
          <div className='w-full md:w-[30%]'>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full md:w-1/2'>Half</div>
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
