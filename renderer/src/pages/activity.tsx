import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import ActivityView from '../views/activityView';

const navigation = [
    { name: 'My Collection', href: '/home', active: false },
    { name: 'Activity', href: '/activity', active: true },
    { name: 'Settings', href: '/settings', active: false },
  ]

function Activity() {
  return (
    <React.Fragment>
      <Head>
        <title>Activity</title>
      </Head>
      <div className='w-full bg-[#1e1e1e]'>
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        <div className='mx-3 mb-3 rounded-xl bg-[#121212]'>
          <div className="container mx-auto min-h-[90vh]">
            {/* Main Area */}
            <ActivityView></ActivityView>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Activity
