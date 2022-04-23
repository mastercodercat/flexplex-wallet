import React from 'react';

// Language: typescript
// Path: renderer/src/components/StartWalletModals.tsx
// Modals: 
//  1. EnterPassword : Enter your wallet password
//  2. CreateOrExistingWallet : Create a new wallet or select an existing one
//  3. CreatePassword: Create a new wallet password
//  4. FinishCreateWallet: Finish creating a new wallet (Has support and twitter links)
//  5. LodingWallet: Loading wallet Modal


function EnterPassword() {
    return (
        <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
            <div className="flex">
                <div className="w-1/2 flex justify-start"><a title='back' href='/login' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg></a></div>
                <div className="w-1/2 flex justify-end"><a title='close' href='/finish' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg></a></div>
            </div>
            <div className=" px-20 pt-10 pb-12">
                <img src="/images/logo.svg" className="mx-auto mb-5 h-18 sm:h-9" alt="Gameplex Logo" />
                <p className="mb-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Enter your password</p>


                <label htmlFor="password" className="relative text-gray-400 focus-within:text-gray-600 block">
                    <svg className='pointer-events-none absolute top-[42px] text-white transform -translate-y-1/2 left-3' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <g id="vuesax_linear_unlock" data-name="vuesax/linear/unlock" transform="translate(-236 -252)">
                            <g id="unlock">
                                <path id="Vector" d="M15,12H5c-4,0-5-1-5-5V5C0,1,1,0,5,0H15c4,0,5,1,5,5V7C20,11,19,12,15,12Z" transform="translate(238 262)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path id="Vector-2" data-name="Vector" d="M0,8V6C0,2.69,1,0,6,0c4.5,0,6,2,6,5" transform="translate(242 254)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path id="Vector-3" data-name="Vector" d="M5,2.5A2.5,2.5,0,1,1,2.5,0,2.5,2.5,0,0,1,5,2.5Z" transform="translate(245.5 265.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(260 276) rotate(180)" fill="none" opacity="0" />
                            </g>
                        </g>
                    </svg>
                    <input type="password" className="focus:outline-none text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-5 pl-11 py-3 mr-2 mt-5 mb-5" placeholder='Password' />
                </label>
                <br />
                <a href="/create" className="focus:outline-none text-white bg-[#3c00b7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-12" type="submit">Unlock</a>
                <a href='#'>Support</a>
            </div>
        </div>
    );
}


function CreateOrExistingWallet() {
    return (
        <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
            <div className="flex">
                <div className="w-1/2 flex justify-start"><a className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></a></div>
                <div className="w-1/2 flex justify-end"><a className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg></a></div>
            </div>
            <div className=" px-20 pt-20 pb-28">
                <img src="/images/logo.svg" className="mx-auto mb-1 h-6 sm:h-9" alt="Gameplex Logo" />
                <p className="mb-3 self-center text-5xl font-semibold whitespace-nowrap dark:text-white">GamePlex</p>
                <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">A Crypto Wallet for DeFi & NFT</p>

                <button className="focus:outline-none text-black bg-[#02ff63] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#02ff63cc] focus:ring-green-300 font-bold rounded-md text-sm px-12 py-3 mr-2 my-5" type="submit">Create New Wallet</button>
                <br />
                <a href="/create" className="focus:outline-none text-white bg-[#3c00b7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-2" type="submit">I Have a Wallet</a>
            </div>
        </div>
    );
}


function CreatePassword() {
    return (
        <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
            <div className="flex">
                <div className="w-1/2 flex justify-start"><a title='back' href='/login' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg></a></div>
                <div className="w-1/2 flex justify-end"><a title='close' href='/finish' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg></a></div>
            </div>
            <div className=" px-20 pt-10 pb-28">
                <p className="mb-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Create password</p>
                <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">Essential when unlocking the wallet</p>

                <input type="password" className="focus:outline-none text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-6 py-3 mr-2 mt-5 mb-2" placeholder='Password' />
                <br />
                <input type="password" className="focus:outline-none text-white bg-[#313131] w-full border-[#383838] border-2 flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-6 py-3 mr-2 my-5" placeholder='Confirm Password' />
                <br />
                <input placeholder="Accept" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-[#313131] checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="checkbox" value="" />
                <label className="form-check-label inline-block text-white-800 pb-5">
                    I agree to <a className='text-[#3c00b7]' href='#'>terms</a>
                </label>
                <a href="/create" className="focus:outline-none text-white bg-[#3c00b7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-md text-sm px-5 py-3 mr-2 mb-2" type="submit">Continue</a>
            </div>
        </div>
    );
}


function FinishCreateWallet() {
    return (
        <div className="mx-auto my-auto text-center card rounded-2xl bg-[#1e1e1e]">
            <div className="flex">
                <div className="w-1/2 flex justify-start"><a title='back' href='/create' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg></a></div>
                <div className="w-1/2 flex justify-end"><a title='close' href='/enter' className="p-6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg></a></div>
            </div>
            <div className=" px-20 pt-10 pb-28">
                <p className="mb-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Everything is ready!</p>
                <p className="mb-3 self-center text-sm whitespace-nowrap dark:text-white pb-6">Follow our product updates or contact<br /> us if you have any question.</p>

                <button className="focus:outline-none text-white bg-[#313131] w-full border-[#383838] border-2 flex  rounded-xl text-sm px-6 pr-2 py-4 mr-2 mt-5 mb-2">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </div>
                    <div className='w-4/5 text-left'> Follow us on Twitter</div>
                    <div className="w-1/5 flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    </div>
                </button>
                <br />
                <button className="focus:outline-none text-white bg-[#313131] w-full flex border-[#383838] border-2 rounded-xl text-sm px-6 pr-2 py-4 mr-2 my-5">
                <div className="w-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                    </div>
                    <div className='w-4/5 text-left'> Visit out support center</div>
                    <div className="w-1/5 flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    </div>
                        </button>
                <br />
                <a href="/create" className="focus:outline-none text-white bg-[#3c00b7] w-full flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:shadow-[#3c00b7cc] focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-3 mr-2 mb-2" type="submit">Finish</a>
            </div>
        </div>
    );
};

export {
    EnterPassword,
    CreateOrExistingWallet,
    CreatePassword,
    FinishCreateWallet
};