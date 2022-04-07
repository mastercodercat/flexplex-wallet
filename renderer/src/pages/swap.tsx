import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';

const navigation = [
    { name: 'My Collection', href: '/home', active: false },
    { name: 'Swap', href: '/swap', active: true },
    { name: 'Activity', href: '/activity', active: false },
    { name: 'Settings', href: '/settings', active: false },
  ]

function Swap() {
  return (
    <React.Fragment>
      <Head>
        <title>Swap</title>
      </Head>
      <div className='w-full min-h-screen'>
          {/* Navbar */}
          <NavBar navigation={navigation} showBrand={false}></NavBar>

          {/* Divider */}
          <div className='w-full h-px bg-[#272727]'></div>
      
      </div>
    </React.Fragment>
  )
}

export default Swap
