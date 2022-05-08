// Left Side Assets View (My Collection)
import { ellipseAddress } from '@/utils/textUtils';
import classnames from 'classnames';
import { useQuery } from 'react-query';
import get from 'lodash.get';
import { getMarket, getAccount } from '../web3/solscan/api';

function AssetCard({asset, onAssetClick}) {
    const { data: assetData } = useQuery(["assetData", { address: get(asset, 'assetAddress', '') }], getAccount, { enabled: !!get(asset, 'assetAddress', '') });
    const amountInUSD =  Math.round(get(assetData, 'data.tokenInfo.price', 0) * get(asset, 'assetAmount', 1) * 100) / 100

    if(!Boolean(asset.assetAmount)) return null;

    return (
        <div className='card cursor-pointer flex w-full bg-[#232323] border border-[#383838] rounded-xl px-3 py-2 mb-3' onClick={onAssetClick}>
            <img src={asset.assetImage} alt="" className="w-12 h-12 rounded-full" />
            <h1 className='ml-2'><span className='text-md font-normal '>{asset.assetName}</span>                     <br />
            <span className='opacity-40 font-thin text-sm'>{asset.assetSymbol}</span></h1>
            <h1 className='text-right w-full'><span className='text-lg font-semibold'>{asset.assetAmount}</span>                     <br />
            {Boolean(amountInUSD) && <span className='opacity-40 font-normal text-sm'>$ {amountInUSD}</span>}
            {/* <span className={classnames('font-normal text-sm',
                asset.assetPercentChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]')}>
                {asset.assetPercentChange > 0 ? '+' : '-'} {Math.abs(asset.assetPercentChange)}%</span> */}
            </h1>
        </div>
    );
}

function AssetsView({profileImage, walletAddress, walletBalance, walletBalanceChange, walletBalancePercentChange, assets, onAssetClick}) {
  return (
    <div className='m-4 bg-[#1e1e1e] rounded-xl'>
        <div className='mx-auto h-[87vh] overflow-y-auto no-scrollbar'>
        <div className='card p-3 w-100 bg-[#232323] border-[#383838] border rounded-xl'>

            <div className="flex justify-start">
            <img className='w-20 h-20 rounded-xl mx-auto' src={profileImage} alt="profileImage" />
            <div className='ml-2'>
                <h1 className='text-sm mb-2 font-normal flex'>
                Wallet 1:&nbsp;&nbsp;<span className='font-light text-sm text-[#FFFFFF99]'>{ellipseAddress(walletAddress, 4)}</span>&nbsp;<span className="logged-in text-[#FF5C59]">●</span><span className="logged-in text-[#01DB6A]">●</span><span className="ml-5"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg></span>
                </h1>
                <h1 className='text-lg font-semibold'>
                <span className='text-xs opacity-40 font-normal'>Balance</span> <br />
                $ {walletBalance} 
                <span className={classnames('text-xs px-3 py-2 rounded-xl', 
                    walletBalancePercentChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]'
                )}>{walletBalancePercentChange > 0 ? '+' : '-'}{Math.abs(walletBalancePercentChange)}%</span>
                <span className={classnames('text-xs', 
                    walletBalanceChange > 0 ? 'text-[#01DB6A]' : 'text-[#FF4136]'
                )}>{walletBalanceChange > 0 ? '+' : '-'}${Math.abs(walletBalanceChange)}</span>
                </h1>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-1 content-center px-3">
            <button className="focus:outline-none h-11 text-white border-[#383838] border bg-[#2c2c2c] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg font-normal rounded-xl text-md py-2 mx-2 mt-5" type="submit">
                <span className='inline-flex content-center'>

                <svg id="import" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path d="M0,0,2.56,2.56,5.12,0" transform="translate(9.32 11.68)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path data-name="Vector" d="M0,0V10.17" transform="translate(11.88 4)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path data-name="Vector" d="M16,0A7.651,7.651,0,0,1,8,8,7.651,7.651,0,0,1,0,0" transform="translate(4 12.18)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path data-name="Vector" d="M0,0H24V24H0Z" transform="translate(24 24) rotate(180)" fill="none" opacity="0" />
                </svg>
                &nbsp;&nbsp;Deposit</span>
            </button>
            <button className="focus:outline-none h-11 text-white border-[#383838] border bg-[#2c2c2c] flex-auto transition ease-out hover:-translate-y-1 hover:scale-100 delay-150 focus:ring-4 hover:shadow-lg font-normal rounded-xl text-md py-2 mx-2 mt-5" type="submit">
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

                &nbsp;&nbsp;Send</span>
            </button>
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