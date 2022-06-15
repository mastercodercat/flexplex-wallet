// Left Side Assets View (My Collection)
import { ellipseAddress } from '@/utils/textUtils';
import classnames from 'classnames';
import { useQuery } from 'react-query';
import get from 'lodash.get';
import { getAccount } from '../web3/solscan/api';
import DepositModal from './transactionViews/depositModal';
import SendModal from './transactionViews/sendModal';


function AssetCard({asset, onAssetClick}) {
    const { data: assetData } = useQuery(["assetData", { address: get(asset, 'assetAddress', '') }], getAccount, { enabled: !!get(asset, 'assetAddress', '') });
    const amountInUSD =  Math.round(get(assetData, 'data.tokenInfo.price', 0) * get(asset, 'assetAmount', 1) * 100) / 100

    if(!Boolean(asset.assetAmount)) return null;

    return (
        <div className='card cursor-pointer flex w-full bg-[#232323] border border-[#383838] rounded-xl px-3 py-2 mb-3' onClick={onAssetClick}>
            <img src={asset.assetImage} alt="" className="w-12 h-12 rounded-full" />
            <h1 className='ml-2'><span className='text-md font-normal '>{asset.assetName}</span>                     <br />
            <span className='opacity-40 font-thin text-sm'>{asset.assetSymbol}</span></h1>
            <div className='flex-grow'></div>
            <h1 className='text-right w-auto'><span className='text-lg font-semibold'>{asset.assetAmount}</span>                     <br />
            {Boolean(amountInUSD) && <span className='opacity-40 font-normal text-sm'>$ {amountInUSD}</span>}
            {/* <span className={classnames('font-normal text-sm',
                asset.assetPercentChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]')}>
                {asset.assetPercentChange > 0 ? '+' : '-'} {Math.abs(asset.assetPercentChange)}%</span> */}
            </h1>
        </div>
    );
}


function AssetsView({profileImage, walletAddress, walletBalance, walletBalanceChange, walletBalancePercentChange, assets, onAssetClick}) {
  const { data: accountData } = useQuery(["getAccount", { address:walletAddress }], getAccount, { enabled: !!walletAddress });

    return (
      <div className='m-4 bg-[#1e1e1e] rounded-xl'>
          <div className='mx-auto h-[87vh] overflow-y-auto no-scrollbar'>
          <div className='card p-3 w-100 bg-[#232323] border-[#383838] border rounded-xl'>
              <div className="flex justify-start">
              <img className='w-20 h-20 rounded-xl' src={profileImage} alt="profileImage" />
              <div className='ml-3'>
                  <h1 className='text-sm mb-2 font-normal flex'>
                  Wallet 1:&nbsp;&nbsp;<span className='font-light text-sm text-[#FFFFFF99]'>{ellipseAddress(walletAddress, 4)}</span>&nbsp;<span className="logged-in text-[#FF5C59]">●</span><span className="logged-in text-[#01DB6A]">●</span><span className="ml-5"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg></span>
                  </h1>
                  <h1 className='text-lg font-semibold'>
                  <span className='text-xs opacity-40 font-normal'>Balance</span> <br />
                  <span className='text-xl font-semibold'>{get(accountData, 'data.lamports', 0) / 1000000000} SOL</span> 
                  {/* <span className={classnames('text-xs px-3 py-2 rounded-xl', 
                      walletBalancePercentChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]'
                  )}>{walletBalancePercentChange > 0 ? '+' : '-'}{Math.abs(walletBalancePercentChange)}%</span>
                  <span className={classnames('text-xs', 
                      walletBalanceChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]'
                  )}>{walletBalanceChange > 0 ? '+' : '-'}${Math.abs(walletBalanceChange)}</span> */}
                  </h1>
              </div>
              </div>
              <div className="grid grid-cols-2 gap-1 content-center px-3">
              
                  {/* Deposit Button */}
                  <DepositModal modalHeader={"Deposit"}  buttonText={"Deposit"} />
  
                  {/* Send Button */}
                  <SendModal modalHeader={"Select a currency to Send"} buttonText={"Send"}/>
              
              </div>
          </div>
          <h1 className='m-3 text-md mt-5 font-semibold'>Assets</h1>
          <div className='w-full py-1 px-3'>
              <div className=' overflow-y-auto'>
                  {
                      assets.map((asset, index) => {
                          return <AssetCard key={index} asset={asset} onAssetClick={onAssetClick} />
                      })
                  }
              </div>
          </div>
          </div>
      </div>
    );
  }


export default AssetsView;