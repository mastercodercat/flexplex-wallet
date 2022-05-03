import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


export default function BlankSettingsModal({ modalHeader, buttonText }){
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
              <div>
                <button onClick={() => {setIsOpen(true)}} className='text-sm w-full p-3 text-[#ffffff66] border border-[#383838] bg-[#232323] rounded-xl'>
                    <table className="table-auto">
                        <tbody>
                            <tr>
                            <td><h1 className='text-sm whitespace-nowrap'>{buttonText}</h1></td>
                            <td className='text-right w-full'>&gt;</td>
                            </tr>
                        </tbody>
                    </table>
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-[#1e1e1e] border border-[#383838] text-left align-middle shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-all">
                            <Dialog.Title
                                as="h1"
                                className="text-white text-lg font-bold text-center bg-[#232323] py-6 px-3 rounded-xl w-100"
                            >
                                {modalHeader}
                            </Dialog.Title>

                            <div className='mb-5 py-6 px-12'>
                                

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