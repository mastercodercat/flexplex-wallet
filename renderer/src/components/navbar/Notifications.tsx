import { Fragment, useEffect, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, CheckCircleIcon } from '@heroicons/react/outline';


export default function Notifications(){
    return (
        <Menu as="div" className="relative inline-block text-left mx-2">
            <div>
            <Menu.Button className="inline-flex justify-center w-full p-1.5 text-sm font-medium text-white bg-[#1e1e1e] border border-[#383838] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <svg id="notification" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path id="Vector" d="M8.046,0a6,6,0,0,0-6,6V8.89a4.778,4.778,0,0,1-.57,2.06L.326,12.86a1.919,1.919,0,0,0,1.08,2.93,20.921,20.921,0,0,0,13.27,0,2,2,0,0,0,1.08-2.93l-1.15-1.91a4.91,4.91,0,0,1-.56-2.06V6A6.018,6.018,0,0,0,8.046,0Z" transform="translate(3.974 2.91)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5" />
                    <path id="Vector-2" data-name="Vector" d="M3.7,1.26a6.054,6.054,0,0,0-.96-.2A6.754,6.754,0,0,0,0,1.26a1.988,1.988,0,0,1,3.7,0Z" transform="translate(10.17 1.94)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path id="Vector-3" data-name="Vector" d="M6,0A3.009,3.009,0,0,1,3,3,3.011,3.011,0,0,1,.88,2.12,3.011,3.011,0,0,1,0,0" transform="translate(9.02 19.06)" fill="none" stroke="#fff" strokeWidth="1.5" />
                    <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
                </svg>
            </Menu.Button>
            </div>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="absolute right-0 w-56 h-56 p-2 origin-top-right bg-[#1e1e1e] border border-[#383838] divide-y divide-[#383838] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="px-1 py-1 ">
                <Menu.Item>
                    {({ active }) => (
                    <button
                        className={`${
                        active ? 'text-[#02ff63]' : 'text-white'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                        <div className="flex flex-col items-start">
                        <div className='flex flex-row'>
                            <span className='text-lg'>Wallet 1</span>
                            <CheckCircleIcon 
                            className="w-5 h-5 ml-2"
                            aria-hidden="true"
                            ></CheckCircleIcon>
                        </div>
                        <div>
                            <span className='text-xs opacity-50'>EP8YfUCpb...Kc2HRjft9</span>
                        </div>
                        </div>
                    </button>
                    )}
                </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
    );
}