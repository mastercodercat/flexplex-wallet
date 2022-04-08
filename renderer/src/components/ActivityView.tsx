import { Button } from "./Button";
import { Tab } from '@headlessui/react'
import { useState } from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function ActivityView() {
    let [token_categories] = useState({
        Received: [
          {
            id: 1,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 2,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 3,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 4,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 5,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
        ],
        Sent: [
          {
            id: 1,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 2,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 3,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 4,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 5,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
        ],
        Deposit: [
          {
            id: 1,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 2,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 3,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 4,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 5,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
        ],
      })

      let [nft_categories] = useState({
        Completed: [
          {
            id: 1,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 2,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 3,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 4,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 5,
            amount: 'Received 2 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
        ],
        Pending: [
          {
            id: 1,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 2,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 3,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 4,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 5,
            amount: 'Sent 2.5 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
        ],
        Cancelled: [
          {
            id: 1,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 2,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 3,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 4,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
          {
            id: 5,
            amount: 'Added 1 SOL',
            from: 'HZsBN4vygsuzDSFvqCcqna4QkFSdxBhyzFsSzSgXZVFW',
            date: '5h ago',
          },
        ],
      })
      
    return (
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">

          {/* Tabs - Token | NFT */}
          <div className="w-full px-2 py-8 mx-auto sm:px-0">
            <Tab.Group>
              <Tab.List className="flex max-w-md mx-auto p-1 space-x-1 bg-[#232323] rounded-xl">
                {/* Token */}
                <Tab
                    key="Token"
                    className={({ selected }) =>
                      classNames(
                        'w-full py-2.5 text-sm leading-5 font-medium text-[#FAFAFA] rounded-lg',
                        'focus:outline-none',
                        selected
                          ? 'text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] shadow'
                          : 'text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]'
                      )
                    }
                  >
                    Token
                  </Tab>

                  {/* NFT */}
                  <Tab
                    key="NFT"
                    className={({ selected }) =>
                      classNames(
                        'w-full py-2.5 text-sm leading-5 font-medium text-[#FAFAFA] rounded-lg',
                        'focus:outline-none',
                        selected
                          ? 'text-white bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] shadow'
                          : 'text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]'
                      )
                    }
                  >
                    NFT
                  </Tab>

                </Tab.List>
              <Tab.Panels className="mt-2">

                {/* Token Tab Content */}
                <Tab.Panel>
                  <div className="w-full px-2 py-8 sm:px-0">
                    <Tab.Group>
                      <Tab.List className="flex max-w-sm p-1 pb-0 space-x-1 bg-[#121212] rounded-xl">
                        {Object.keys(token_categories).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                'w-full py-2.5 mb-0 text-sm leading-5 text-[#FAFAFA] inline-block rounded-t-lg',
                                'focus:outline-none',
                                selected
                                  ? 'text-black bg-gradient-to-r from-[#02FF63] to-[#01B76B] shadow'
                                  : 'text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]'
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                        
                      </Tab.List>
                      <Tab.Panels className="mt-0">

                        {Object.values(token_categories).map((txs, idx) => (
                          <Tab.Panel
                            key={idx}
                          >
                            <div className="flex flex-col gap-y-4">
                              {txs.map((tx) => (
                                <div className="bg-[#1E1E1E] px-16 py-4 rounded-xl">
                                  <div className="flex flex-row">

                                    <div className="flex flex-col">
                                      <div className="text-xs text-white/40 p-0.5">Amount</div>
                                      <div className="text-sm text-white p-0.5">{tx.amount}</div>
                                    </div>

                                    <div className="grow"></div>

                                    <div className="flex flex-col">
                                      <div className="text-xs text-white/40 p-0.5">From</div>
                                      <div className="text-sm text-white p-0.5">{tx.from}</div>
                                    </div>

                                    <div className="grow"></div>

                                    <div className="flex flex-col">
                                      <div className="text-xs text-white/40 p-0.5">Date</div>
                                      <div className="text-sm text-white p-0.5">{tx.date}</div>
                                    </div>

                                  </div>
                                </div>
                              ))}

                            </div>
                          </Tab.Panel>
                        ))} 

                      </Tab.Panels>
                    </Tab.Group>
                  </div>

                </Tab.Panel>

                {/* NFT Tab Content */}
                <Tab.Panel>
                  <div className="w-full px-2 py-8 sm:px-0">
                    <Tab.Group>
                      <Tab.List className="flex max-w-sm p-1 pb-0 space-x-1 bg-[#121212] rounded-xl">
                        {Object.keys(nft_categories).map((category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                'w-full py-2.5 mb-0 text-sm leading-5 text-[#FAFAFA] inline-block rounded-t-lg',
                                'focus:outline-none',
                                selected
                                  ? 'text-black bg-gradient-to-r from-[#02FF63] to-[#01B76B] shadow'
                                  : 'text-[#FAFAFA] hover:bg-white/[0.12] hover:text-[#FAFAFA]'
                              )
                            }
                          >
                            {category}
                          </Tab>
                        ))}
                        
                      </Tab.List>
                      <Tab.Panels className="mt-0">

                        {Object.values(nft_categories).map((txs, idx) => (
                          <Tab.Panel
                            key={idx}
                          >
                            <div className="flex flex-col gap-y-4">
                              {txs.map((tx) => (
                                <div className="bg-[#1E1E1E] px-16 py-4 rounded-xl">
                                  <div className="flex flex-row">

                                    <div className="flex flex-col">
                                      <div className="text-xs text-white/40 p-0.5">Amount</div>
                                      <div className="text-sm text-white p-0.5">{tx.amount}</div>
                                    </div>

                                    <div className="grow"></div>

                                    <div className="flex flex-col">
                                      <div className="text-xs text-white/40 p-0.5">From</div>
                                      <div className="text-sm text-white p-0.5">{tx.from}</div>
                                    </div>

                                    <div className="grow"></div>

                                    <div className="flex flex-col">
                                      <div className="text-xs text-white/40 p-0.5">Date</div>
                                      <div className="text-sm text-white p-0.5">{tx.date}</div>
                                    </div>

                                  </div>
                                </div>
                              ))}

                            </div>
                          </Tab.Panel>
                        ))} 

                      </Tab.Panels>
                    </Tab.Group>
                  </div>

                </Tab.Panel>

              </Tab.Panels>
            </Tab.Group>
          </div>

      </div>
    );
}