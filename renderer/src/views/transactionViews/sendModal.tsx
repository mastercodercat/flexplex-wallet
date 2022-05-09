import { getAccount } from '@/web3/solscan/api';
import { Dialog, Transition } from '@headlessui/react'
import get from 'lodash.get';
import { Fragment, useState } from 'react'
import { useQuery } from 'react-query';


export default function SendModal({ modalHeader, buttonText }) {
    let [isOpen, setIsOpen] = useState(false);
    const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY;
    const { data: accountData } = useQuery(["getAccount", { address }], getAccount, { enabled: !!address });


    return (
        <div className="relative inline-block text-left">
            <div>
                <button onClick={() => { setIsOpen(true) }} className="focus:border-transparent focus:ring-0 h-11 w-full text-white border-[#383838] border bg-[#2c2c2c] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg font-normal rounded-xl text-md py-2 mt-5" type="submit">
                    <span className='inline-flex content-center'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <g id="vuesax_linear_export" data-name="vuesax/linear/export" transform="translate(-492 -444)">
                            <g id="export">
                                <path d="M0,2.56,2.56,0,5.12,2.56" transform="translate(501.32 447.94)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path data-name="Vector" d="M0,10.17V0" transform="translate(503.88 448.01)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path data-name="Vector" d="M0,0A7.651,7.651,0,0,0,8,8a7.651,7.651,0,0,0,8-8" transform="translate(496 456)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(516 468) rotate(180)" fill="none" opacity="0" />
                            </g>
                        </g>
                    </svg>
                        &nbsp;&nbsp;{buttonText}</span>
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
                                        className="text-white text-lg font-semibold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                                    >
                                        {modalHeader}
                                    </Dialog.Title>


                                    <div className='min-h-[32rem] mb-5 py-3 px-9'>

                                        <div className='grid grid-cols-11 mb-6'>
                                            <div className='flex justify-end rounded-xl col-span-5'>
                                                <button type='button' title="Copy" className='bg-[#1e1e1e] p-1 rounded-2xl text-[#fff] border-2 border-[#6A00FF] h-12 w-12'>
                                                    1
                                                </button>
                                            </div>
                                            <div><hr className='my-6 mx-3 opacity-40' /></div>
                                            <div className='rounded-xl  col-span-5'>
                                                <button type='button' title="Copy" className='bg-[#1e1e1e] p-1 rounded-2xl text-[#fff] border-2 border-[#383838] h-12 w-12'>
                                                    2
                                                </button>
                                            </div>
                                        </div>

                                        <h1 className='text-sm mb-3 font-light'>Select a currency to send</h1>
                                        <div className='grid grid-cols-7 bg-[#1e1e1e] border border-[#383838] rounded-xl mb-8'>
                                            <input placeholder='Select a cryptocurrency' type='text' className='col-span-6 focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3'></input>
                                            <div className='flex justify-end rounded-xl'>
                                                <button type='button' title="Copy" className='bg-[#02ff63] p-3 text-sm rounded-xl text-[#000]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <h1 className='text-sm mb-3 font-light'>Select an amount</h1>
                                        <div className='bg-[#1e1e1e] border border-[#383838] rounded-xl h-24'>
                                            <input title='Value' value={`${get(accountData, 'data.lamports', 0) / 1000000000} SOL`} type='text' className='w-full focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-right text-3xl pt-3 pb-0'></input>
                                            <input title='Value' value={"- $ 22,7115,67"} type='text' className='w-full focus:border-transparent focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] opacity-60 text-right font-light text-lg pb-3'></input>
                                        </div>

                                        <div className="relative pt-1 mb-16">
                                            <input title='range' type="range" className="slider form-range accent-[#02FF63] w-full h-10 p-0 bg-transparent outline-none ring-0 shadow-none" min="0" max="100" step="0.5" />
                                            <ul className="flex justify-between w-full px-12">
                                                <li className="flex justify-center relative"><span className="absolute bg-[#02FF63] text-xs font-semibold py-1 px-8 text-black rounded-xl">25%</span></li>
                                                <li className="flex justify-center relative"><span className="absolute bg-[#02FF63] text-xs font-semibold py-1 px-8 text-black rounded-xl">50%</span></li>
                                                <li className="flex justify-center relative"><span className="absolute bg-[#383838] text-xs font-semibold py-1 px-8 text-white rounded-xl">75%</span></li>
                                                <li className="flex justify-center relative"><span className="absolute bg-[#383838] text-xs font-semibold py-1 px-8 text-white rounded-xl">Max</span></li>
                                            </ul>
                                        </div>



                                        <div className='grid grid-cols-12'>
                                            <h1 className='text-sm mb-3 col-span-11 font-light'>Address of the recipient
                                            </h1>
                                            <div className="ml-3">
                                                {/* Change the Icon Accordingly */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                    <g transform="translate(-748 -188)">
                                                        <path d="M10,20A10,10,0,1,0,0,10,10.029,10.029,0,0,0,10,20Z" transform="translate(750 190)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        <path data-name="Vector" d="M0,2.83,2.83,5.66,8.5,0" transform="translate(755.75 197.17)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(748 188)" fill="none" opacity="0" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='bg-[#1e1e1e] border border-[#383838] rounded-xl mb-2'>
                                            <input placeholder='Please enter received address' type='text' className='w-full focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-sm py-3'></input>
                                        </div>
                                    </div>
                                    <div className='col-span-2 pb-8 px-6 w-full flex justify-center'>
                                        <button className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-md p-2 ml-2 mt-3" type="submit">Next</button>
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