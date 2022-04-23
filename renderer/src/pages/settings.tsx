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
      <div className='w-full min-h-screen bg-[#1e1e1e]'>
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        <div className='mx-3 mb-3 rounded-xl bg-[#121212]'>
        <div className="container mx-auto h-[90vh] md:px-6 lg:px-44 xl:px-56">
          <div className='grid grid-cols-2 gap-5 p-3 content-center'>

            <div className='card content-center text-center col-span-2 border-[#383838] border md:mx-auto max-w-lg mt-3 pt-5 pb-3 px-3 bg-[#1e1e1e] rounded-xl'>
              <h1 className="text-center text-3xl py-3 inline w-full px-auto">Wallet 1 <svg className='inline-block mx-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <g id="edit" transform="translate(-620 -252)">
                  <path id="Vector" d="M9,0H7C2,0,0,2,0,7v6c0,5,2,7,7,7h6c5,0,7-2,7-7V11" transform="translate(622 254)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  <path id="Vector-2" data-name="Vector" d="M8.991,1.271l-7.88,7.88a2.712,2.712,0,0,0-.66,1.32l-.43,3.01a1.424,1.424,0,0,0,1.7,1.7l3.01-.43a2.8,2.8,0,0,0,1.32-.66l7.88-7.88c1.36-1.36,2-2.94,0-4.94S10.351-.089,8.991,1.271Z" transform="translate(627.049 253.749)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  <path id="Vector-3" data-name="Vector" d="M0,0A7.144,7.144,0,0,0,4.94,4.94" transform="translate(634.91 256.15)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                  <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(620 252)" fill="none" opacity="0" />
                </g>
              </svg>
              </h1>
              <p className='text-center text-sm opacity-40 break-words py-3 px-5'>(HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW)</p>
            </div>

            <div className='card py-3 bg-[#1e1e1e] border-[#383838] border rounded-xl w-full max-w-lg mx-auto'>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Languages</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>English</p>
              </div>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Address book</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>English</p>
              </div>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Trusted applications</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>Configure your trusted applications</p>
              </div>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Auto lock timer</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>Change auto lock timer</p>
              </div>
            </div>
            <div className='card py-2 bg-[#1e1e1e] border-[#383838] border rounded-xl w-full max-w-lg mx-auto'>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Change network</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>Configure network settings</p>
              </div>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Show secret phrase</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>Do not share your secret phrase with anyone</p>
              </div>
              <div className='py-2 px-6 cursor-pointer'>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td><h1 className='text-xl w-1/2 whitespace-nowrap'>Export private key</h1></td>
                      <td className='text-right w-full'>&gt;</td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-sm py-2 text-[#ffffff66]'>Do not share your secret phrase with anyone</p>
              </div>
            </div>
            <div className="w-100 text-right">
              <button className="focus:outline-none w-1/2  order-[#383838] border bg-[#1e1e1e] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg font-bold rounded-xl text-sm py-2 mr-2 my-5" type="submit">Reset Secret Phrase</button>
            </div>
            <button className="focus:outline-none w-1/2 text-white bg-[#B72C42] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#B72C42cc] font-bold rounded-md text-sm py-2 mr-2 my-5" type="submit">Delete Wallet</button>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Settings
