import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


export default function DepositModal({ modalHeader, buttonText }){
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
              <div>
                <button onClick={() => {setIsOpen(true)}} className="focus:outline-none h-11 w-full text-white border-[#383838] border bg-[#2c2c2c] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg font-normal rounded-xl text-md py-2 mx-2 mt-5" type="submit">
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
                                className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                            >
                                {modalHeader}
                            </Dialog.Title>

                            <div className='mb-5 py-6 px-12'>
                                
                            {/* Deposit Modal Body */}
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