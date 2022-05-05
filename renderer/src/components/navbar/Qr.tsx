import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { QrcodeIcon } from '@heroicons/react/outline';


export default function Qr() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button title='Scan QR' onClick={() => { setIsOpen(true) }} className="inline-flex justify-center w-full p-1.5 text-sm font-medium text-white rounded-xl bg-[#02FF63] border border-[#383838] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <g id="scan" transform="translate(-364 -252)">
                            <path d="M0,7V4.5A4.494,4.494,0,0,1,4.5,0H7" transform="translate(366 254)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M0,0H2.5A4.494,4.494,0,0,1,7,4.5V7" transform="translate(379 254)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M6,0V1.5A4.494,4.494,0,0,1,1.5,6H0" transform="translate(380 268)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M7,7H4.5A4.494,4.494,0,0,1,0,2.5V0" transform="translate(366 267)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M10,3V8a2.652,2.652,0,0,1-3,3H3A2.652,2.652,0,0,1,0,8V3A2.652,2.652,0,0,1,3,0H7A2.652,2.652,0,0,1,10,3Z" transform="translate(371 258.5)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M14,0H0" transform="translate(369 264)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(388 276) rotate(180)" fill="none" opacity="0" />
                        </g>
                    </svg>
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {/* Background Blur */}
                        <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[30rem] transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                                    <Dialog.Title
                                        as="h1"
                                        className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                                    >
                                        Scan QR Code
                                    </Dialog.Title>

                                    <div className='mb-5 py-6 px-16'>
                                        <div className='bg-[#232323] border-2 h-80 border-dashed border-[#383838] rounded-xl w-100 mb-4'>
                                            <div className='h-60 flex justify-center'>
                                                {/* QR Code SVG */}
                                                <img className='w-32 h-32 mx-auto my-auto' src='/icons/qr.svg' alt='QR Code Icon'></img>
                                            </div>
                                            <div className='flex justify-center'>
                                                <button className="focus:outline-none w-64 text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] font-bold rounded-xl text-sm py-2 px-6 mr-2 my-3" type="submit">Scan QR Code</button>
                                            </div>
                                        </div>
                                        <h1 className='text-center mt-12 mb-3 text-sm'>Or use wallet connect uri</h1>
                                        <div className='grid grid-cols-4 bg-[#1e1e1e] border border-[#383838] rounded-xl w-100 mb-2'>
                                            <input placeholder='e.g wc:a2875887bb44y7…' type='text' className='col-span-3 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-xs py-4 pl-6'></input>
                                            <div className='flex justify-end rounded-xl'>
                                                <button type='button' title="Revoke" className='bg-[#272727] p-3 w-full text-sm rounded-xl text-[#ffffff99]'>
                                                    Connect
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

    );
}