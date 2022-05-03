import { Fragment, useEffect, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { CheckCircleIcon, PlusCircleIcon, QuestionMarkCircleIcon, LogoutIcon } from '@heroicons/react/outline';


export default function MoreOptions(){
    return (
        <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full p-1.5 text-sm font-medium text-white rounded-xl bg-[#1e1e1e] border border-[#383838] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <g id="more" transform="translate(-556 -188)">
                      <path d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z" transform="translate(559 198)" fill="none" stroke="#fff" strokeWidth="1.5" />
                      <path data-name="Vector" d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z" transform="translate(573 198)" fill="none" stroke="#fff" strokeWidth="1.5" />
                      <path data-name="Vector" d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z" transform="translate(566 198)" fill="none" stroke="#fff" strokeWidth="1.5" />
                      <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(556 188)" fill="none" opacity="0" />
                    </g>
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
                <Menu.Items className="absolute mt-2 right-0 w-56 p-2 origin-top-right bg-[#1e1e1e] border border-[#383838] divide-y divide-[#383838] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
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
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'text-[#02ff63]' : 'text-white'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <PlusCircleIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusCircleIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          Add / Link Wallet
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'text-[#02ff63]' : 'text-white'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <QuestionMarkCircleIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <QuestionMarkCircleIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          Help & Support
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'text-[#02ff63]' : 'text-white'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <LogoutIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : (
                            <LogoutIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          )}
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
    );
}