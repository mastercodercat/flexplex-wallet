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
  {id: "1", optionHeader: "Display language", optionDescription: "Select the language you prefer."},
  {id: "2", optionHeader: "Address book", optionDescription: "Manage commonly used addresses"},
  {id: "3", optionHeader: "Trusted applications", optionDescription: "Configure your trusted applications"},
  {id: "4", optionHeader: "Auto lock timer", optionDescription: "Change auto lock timer"},
]

const rightCardOptions = [
  {id: "5", optionHeader: "Change network", optionDescription: "Configure network settings"},
  {id: "6", optionHeader: "Show secret phrase", optionDescription: "Do not share your secret phrase with anyone"},
  {id: "7", optionHeader: "Export private key", optionDescription: "Do not share your secret phrase with anyone"},
  {id: "8", optionHeader: "Reset secret phrase", optionDescription: "Do not share your secret phrase with anyone"},
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
