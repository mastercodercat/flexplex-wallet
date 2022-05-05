import { Tab } from '@headlessui/react'
import { useState } from 'react'
import classNames from 'classnames'

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
    <div className="w-5xl mx-auto px-2 sm:px-6 lg:px-8">

      {/* Tabs - Token | NFT */}
      <div className="w-full px-2 py-8 mx-auto sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-md mx-auto p-1 space-x-1 bg-[#232323] rounded-xl">
            {/* Token */}
            <Tab
              key="Token"
              className={({ selected }) =>
                classNames(
                  'w-full py-3.5 text-lg leading-5 font-medium text-[#FAFAFA] rounded-lg',
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
                  'w-full py-3.5 text-lg leading-5 font-medium text-[#FAFAFA] rounded-lg',
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
                            'pb-10 w-full py-2.5 mb-0 text-sm leading-5 text-[#FAFAFA] inline-block rounded-t-lg',
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
                  <Tab.Panels className="mt-0 ml-1">

                    {Object.values(token_categories).map((txs, idx) => (
                      <Tab.Panel
                        key={idx}
                      >
                        <div className='w-full relative top-[-1.9rem] bg-[#1e1e1e] rounded-xl p-5'>
                          {/* Filter Buttons */}
                          <div className="text-right mb-2">
                            <button className="focus:outline-none text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:text-black hover:shadow-[#02ff63cc] hover:bg-[#02ff63] bg-[#02ff63] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3">7 Days</button>
                            <button className="focus:outline-none text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:text-black hover:shadow-[#02ff63cc] hover:bg-[#02ff63] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3">24 Days</button>
                            <button className="focus:outline-none text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:text-black hover:shadow-[#02ff63cc] hover:bg-[#02ff63] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3">30 Days</button>
                          </div>
                          <table className="rounded-xl w-full text-sm mb-3">
                            <thead className="">
                              <tr>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left pl-16'>AMOUNT</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left'>FROM</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left pr-16'>DATE</th>
                              </tr>
                            </thead>
                            <tbody className="rounded-xl overflow-y-scroll">
                              {txs.map((tx, id) => (
                                <tr className={classNames(id % 2 == 0 ?'bg-[#232323]' : 'bg-[#2c2c2c]',
                                id == 0 ? 'rounded-t-lg': '')} key={id}>
                                  <td className="pl-16 py-5 px-5">{tx.amount}</td>
                                  <td className="py-3 px-2">{tx.from}</td>
                                  <td className="pr-16 py-3 px-2">{tx.date}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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
                            'pb-10 w-full py-2.5 mb-0 text-sm leading-5 text-[#FAFAFA] inline-block rounded-t-lg',
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
                  <Tab.Panels className="mt-0 ml-1">

                    {Object.values(nft_categories).map((txs, idx) => (
                      <Tab.Panel
                        key={idx}
                      >
                        <div className='w-full relative top-[-1.9rem] bg-[#1e1e1e] rounded-xl p-5'>
                          {/* Filter Buttons */}
                          <div className="text-right mb-2">
                            <button className="focus:outline-none text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:text-black hover:shadow-[#02ff63cc] hover:bg-[#02ff63] bg-[#02ff63] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3">7 Days</button>
                            <button className="focus:outline-none text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:text-black hover:shadow-[#02ff63cc] hover:bg-[#02ff63] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3">24 Days</button>
                            <button className="focus:outline-none text-white mx-3 transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg hover:text-black hover:shadow-[#02ff63cc] hover:bg-[#02ff63] font-bold rounded-md text-sm py-2 px-3 mr-2 my-3">30 Days</button>
                          </div>

                          <table className="table-auto w-full text-xs mb-3">
                            <thead>
                              <tr>
                                <th className=''></th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left'>NAME</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left'>TRANSACTION ID</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left' colSpan={2}>TRANSACTION TYPE</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left'>TIME</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left'>TOTAL AMOUNT</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left'>BUYER</th>
                                <th className='text-[#02FF63] font-light pb-5 pt-2 text-left pr-16'>SELLER</th>
                              </tr>
                            </thead>
                            <tbody className=" rounded-xl max-h-[90vh] overflow-y-scroll">
                              {txs.map((tx, id) => (
                                <tr className={id % 2 == 0 ?'bg-[#232323]' : 'bg-[#2c2c2c]'} key={id}>
                                  <td className="py-5 px-5"><img className='w-12 h-12 rounded-xl mx-auto' src="/images/nfts/1.png" alt="" /></td>
                                  <td className="py-5 pr-5">Bizarre Platypus #4688</td>
                                  <td className='py-5 pr-5'>Lmahm … pfB</td>
                                  <td className='py-5 pr-5 text-[#02ff63]'>Sale</td>
                                  <td className='py-5 pr-5 text-[#6A00FF]'>(ME v2)</td>
                                  <td className="py-5 pr-5">37 min ago</td>
                                  <td className='py-5 pr-5'>16.9 SOL</td>
                                  <td className="py-5 pr-5">DKjHw…jWy</td>
                                  <td className='py-5 pr-5'>DKjHw…jWy</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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