import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import ActivityView from '../components/ActivityView';

const navigation = [
    { name: 'My Collection', href: '/home', active: false },
    { name: 'Swap', href: '/swap', active: false },
    { name: 'Activity', href: '/activity', active: true },
    { name: 'Settings', href: '/settings', active: false },
  ]

function Activity() {
  return (
    <React.Fragment>
        <Head>
            <title>Activity</title>
        </Head>
        <div className='w-full min-h-screen'>
            {/* Navbar */}
            <NavBar navigation={navigation} showBrand={true}></NavBar>

            {/* Divider */}
            <div className='w-full h-px bg-[#272727]'></div>

            {/* Main Area */}
            <ActivityView></ActivityView>
        </div>
    </React.Fragment>
  )
}

export default Activity
