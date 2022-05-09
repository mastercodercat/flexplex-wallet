import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


export default function DepositModal({ modalHeader, buttonText }) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button onClick={() => { setIsOpen(true) }} className="focus:border-transparent focus:ring-0 h-11 w-full text-white border-[#383838] border bg-[#2c2c2c] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg font-normal rounded-xl text-md py-2 mt-5" type="submit">
                    <span className='inline-flex content-center'>
                        <svg id="import" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path d="M0,0,2.56,2.56,5.12,0" transform="translate(9.32 11.68)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M0,0V10.17" transform="translate(11.88 4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M16,0A7.651,7.651,0,0,1,8,8,7.651,7.651,0,0,1,0,0" transform="translate(4 12.18)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(24 24) rotate(180)" fill="none" opacity="0" />
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

                                    <div className='min-h-[32rem] mb-5 py-5 px-9'>
                                        <h1 className='text-sm mb-3 font-light'>Select a currency</h1>
                                        <div className='grid grid-cols-7 bg-[#1e1e1e] border border-[#383838] rounded-xl mb-2'>
                                            <div placeholder='15' className='col-span-6 grid grid-cols-2 focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-xs py-1'>
                                                <div className='flex'>
                                                    <img src="/icons/sol.svg" className="mt-[.42rem] ml-5 mr-3 h-5" alt="SOL" />
                                                    <div>
                                                        <h1 className='font-semibold pt-[.15rem]'>
                                                            Solana
                                                        </h1>
                                                        <h1 className='text-[.6rem] opacity-60'>
                                                            Sol
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className='text-right'>
                                                    <h1 className='text-sm font-semibold'>
                                                        4,500.06
                                                    </h1>
                                                    <h1 className='text-[.6rem] opacity-60'>
                                                        Available
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className='flex justify-end rounded-xl'>
                                                <button type='button' title="Search" className='bg-[#02ff63] p-3 text-sm rounded-xl text-[#000000]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='h-64 flex justify-center'>
                                            {/* QR Code SVG */}
                                            <div className='rounded-xl bg-white h-52 w-52 my-5 p-3'>
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                    viewBox="0 0 64 64">
                                                    <g>
                                                        <rect x="38" y="23" width="2" height="5" />
                                                        <rect x="42" y="23" width="2" height="5" />
                                                        <rect x="38" y="30" width="2" height="2" />
                                                        <rect x="42" y="30" width="2" height="2" />
                                                        <rect x="31" y="34" width="2" height="2" />
                                                        <rect x="26" y="54" width="2" height="2" />
                                                        <rect x="42" y="34" width="2" height="2" />
                                                        <rect x="38" y="38" width="2" height="2" />
                                                        <rect x="42" y="38" width="2" height="2" />
                                                        <path d="M2,2h3V0H1C0.448,0,0,0.448,0,1v4h2V2z" />
                                                        <path d="M63,0h-4v2h3v3h2V1C64,0.448,63.552,0,63,0z" />
                                                        <path d="M2,59H0v4c0,0.552,0.448,1,1,1h4v-2H2V59z" />
                                                        <path d="M62,62h-3v2h4c0.552,0,1-0.448,1-1v-4h-2V62z" />
                                                        <path d="M4,5v12c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1H5C4.448,4,4,4.448,4,5z M6,6h10v10H6V6z" />
                                                        <path d="M13,8H9C8.448,8,8,8.448,8,9v4c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V9C14,8.448,13.552,8,13,8z M12,12h-2v-2h2V12z"
                                                        />
                                                        <path d="M47,18h12c0.552,0,1-0.448,1-1V5c0-0.552-0.448-1-1-1H47c-0.552,0-1,0.448-1,1v12C46,17.552,46.448,18,47,18z M48,6h10v10
		H48V6z"/>
                                                        <path d="M55,8h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V9C56,8.448,55.552,8,55,8z M54,12h-2v-2h2V12z
		"/>
                                                        <path d="M17,46H5c-0.552,0-1,0.448-1,1v12c0,0.552,0.448,1,1,1h12c0.552,0,1-0.448,1-1V47C18,46.448,17.552,46,17,46z M16,58H6V48
		h10V58z"/>
                                                        <path d="M9,56h4c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1H9c-0.552,0-1,0.448-1,1v4C8,55.552,8.448,56,9,56z M10,52h2v2h-2V52z"
                                                        />
                                                        <path d="M44,19h-7V7h-2v13c0,0.552,0.448,1,1,1h8V19z" />
                                                        <rect x="22" y="12" width="7" height="2" />
                                                        <rect x="26" y="8" width="7" height="2" />
                                                        <rect x="4" y="19" width="2" height="9" />
                                                        <path d="M18,25H8v2h9v4h2v-5C19,25.448,18.552,25,18,25z" />
                                                        <rect x="9" y="20" width="2" height="2" />
                                                        <rect x="21" y="18" width="2" height="8" />
                                                        <rect x="21" y="28" width="9" height="2" />
                                                        <path d="M61,29h-2v10h-3v2h4c0.552,0,1-0.448,1-1V29z" />
                                                        <rect x="26" y="18" width="2" height="2" />
                                                        <rect x="4" y="33" width="2" height="8" />
                                                        <rect x="4" y="42" width="9" height="2" />
                                                        <path d="M50,28h2v-4c0-0.552-0.448-1-1-1h-5v2h4V28z" />
                                                        <rect x="9" y="33" width="2" height="2" />
                                                        <rect x="20" y="32" width="2" height="8" />
                                                        <rect x="20" y="42" width="9" height="2" />
                                                        <rect x="8" y="38" width="9" height="2" />
                                                        <rect x="21" y="52" width="2" height="4" />
                                                        <rect x="20" y="48" width="9" height="2" />
                                                        <path d="M36,44v-5c0-0.552-0.448-1-1-1H25v2h9v4H36z" />
                                                        <rect x="26" y="32" width="2" height="2" />
                                                        <rect x="15" y="34" width="2" height="2" />
                                                        <rect x="59" y="53" width="2" height="7" />
                                                        <rect x="54" y="58" width="3" height="2" />
                                                        <rect x="54" y="52" width="2" height="4" />
                                                        <path d="M61,44c0-0.552-0.448-1-1-1H49v2h10v6h2V44z" />
                                                        <path d="M48,56v-5c0-0.552-0.448-1-1-1H36v2h10v4H48z" />
                                                        <rect x="50" y="47" width="7" height="2" />
                                                        <rect x="20" y="58" width="7" height="2" />
                                                        <rect x="30" y="51" width="2" height="9" />
                                                        <rect x="32" y="46" width="4" height="2" />
                                                        <path d="M47,36h5v-2h-4v-6h-2v7C46,35.552,46.448,36,47,36z" />
                                                        <rect x="50" y="30" width="5" height="2" />
                                                        <rect x="54" y="20" width="3" height="2" />
                                                        <rect x="59" y="20" width="2" height="5" />
                                                        <rect x="54" y="25" width="2" height="2" />
                                                        <path d="M39,17h4c0.552,0,1-0.448,1-1V3h-2v12h-3V17z" />
                                                        <path d="M24,5h15V3H23c-0.552,0-1,0.448-1,1v5h2V5z" />
                                                        <path d="M25,24h7c0.552,0,1-0.448,1-1v-8h-2v7h-6V24z" />
                                                        <rect x="34" y="23" width="2" height="4" />
                                                        <rect x="36" y="54" width="7" height="2" />
                                                        <rect x="36" y="58" width="9" height="2" />
                                                        <path d="M50,58h-2v2h3c0.552,0,1-0.448,1-1v-8h-2V58z" />
                                                        <rect x="16" y="42" width="2" height="2" />
                                                        <rect x="39" y="42" width="4" height="2" />
                                                        <rect x="46" y="38" width="2" height="3" />
                                                        <rect x="45" y="43" width="2" height="2" />
                                                        <rect x="39" y="46" width="3" height="2" />
                                                        <rect x="50" y="38" width="2" height="2" />
                                                        <rect x="54" y="34" width="3" height="2" />
                                                        <rect x="35" y="34" width="5" height="2" />
                                                        <rect x="34" y="29" width="2" height="3" />
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                    <g>
                                                    </g>
                                                </svg>

                                            </div>
                                        </div>
                                        <h1 className='text-sm mb-3 font-light'>Wallet 1 Address</h1>
                                        <div className='grid grid-cols-7 bg-[#1e1e1e] border border-[#383838] rounded-xl mb-2'>
                                            <input placeholder='15' type='text' value={"B3r4LhqCa3Xb7Wd8uQQ1pD6RKdAfVmrcFcUzfGH4ELZF"} className='col-span-6 focus:border-transparent font-light focus:ring-0 rounded-xl bg-[#1e1e1e] border-0 text-[#ffffff] text-left text-xs py-3'></input>
                                            <div className='flex justify-end rounded-xl'>
                                                <button type='button' title="Copy" className='bg-[#02ff63] p-3 text-sm rounded-xl text-[#ffffff99]'>
                                                    <svg id="copy" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                        <path d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H4.9C1.4,14,0,12.6,0,9.1V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z" transform="translate(2 8)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        <path data-name="Vector" d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H8V10.9C8,7.4,6.6,6,3.1,6H0V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z" transform="translate(8 2)" fill="none" stroke="#292d32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                        <path data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <h1 className='text-xs mt-3 text-center font-light opacity-60'>This address can use only to receive<br />SOL and SPL tokens in Solana</h1>
                                    </div>
                                    <div className='col-span-2 pb-8 px-6 w-full flex justify-center'>
                                        <button className="focus:border-transparent focus:ring-0 w-64 text-black bg-[#02ff63] transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 hover:shadow-lg hover:shadow-[#02ff63cc] font-bold rounded-xl text-md p-2 ml-2 mt-3" type="submit">Close</button>
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