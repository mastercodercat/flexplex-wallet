import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import SettingsView from '../views/settingsView';


const navigation = [
  { name: 'My Collection', href: '/home', active: false },
  { name: 'Activity', href: '/activity', active: false },
  { name: 'Settings', href: '/settings', active: true },
]

const leftCardOptions = [
  {optionHeader: "Languages", optionDescription: "English"},
  {optionHeader: "Languages", optionDescription: "English"},
  {optionHeader: "Languages", optionDescription: "English"},
  {optionHeader: "Languages", optionDescription: "English"},
]

const rightCardOptions = [
  {optionHeader: "Languages", optionDescription: "English"},
  {optionHeader: "Languages", optionDescription: "English"},
  {optionHeader: "Languages", optionDescription: "English"},
]

function Settings() {
  return (
    <React.Fragment>
      <Head>
        <title>Settings</title>
      </Head>
      <div className='w-full min-h-screen bg-[#1e1e1e]'>
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        {/* Settings View */}
        <SettingsView walletName={"Wallet 1"} 
        walletAddress={"EP8YfUCpbbLVL3zZUZmDWPboFSjpYaSUYYXKc2HRjft9"}
        onChangeWalletAddress={(e) => {console.log(e.target.value)}}
        onChangeWalletName={(e) => {console.log(e.target.value)}}
        leftCardOptions={leftCardOptions}
        rightCardOptions={rightCardOptions}
        ></SettingsView>
      </div>
    </React.Fragment>
  )
}

export default Settings
