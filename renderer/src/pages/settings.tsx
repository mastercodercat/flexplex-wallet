import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';


const navigation = [
    { name: 'My Collection', href: '/home', active: false },
    { name: 'Swap', href: '/swap', active: false },
    { name: 'Activity', href: '/activity', active: false },
    { name: 'Settings', href: '/settings', active: true },
  ]

function Settings() {
  return (
    <React.Fragment>
        <Head>
            <title>Settings</title>
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

export default Settings
