import React, { useEffect, useState } from 'react';
import MyCollectionView from "@/views/myCollectionView";
import AssetsView from '@/views/assetsView';
import { randomIntFromInterval } from '@/utils/numberUtils';
import { useMetadata } from '@/web3/hooks/useMetadata';
import { publicKey, connection } from '@/web3/config';
import { Metadata } from '@/web3/schema/metadata';
import NavigationStore from '@/store/NavigationStore'
import { useQuery } from 'react-query';
import GameplexLoader from '@/components/GameplexLoader';
import { getTokens } from '../web3/solscan/api';
import get from 'lodash.get';


// Dummy Assets - Replace with real ones
const coins = [
  "/images/coins/ada.png",
  "/images/coins/avax.png",
  "/images/coins/doge.png",
  "/images/coins/link.png",
  "/images/coins/matic.png",
  "/images/coins/near.png",
  "/images/coins/shib.png",
  "/images/coins/tether.png"
]

// const assets = coins.map(coin => ({
//     assetImage: coin,
//     assetName: coin.split("/")[3].split(".")[0],
//     assetSymbol: coin.split("/")[3].split(".")[0].toUpperCase(),
//     assetAmount: randomIntFromInterval(1, 100),
//     assetAmountInUSD: randomIntFromInterval(1000, 10000),
//     assetPercentChange: randomIntFromInterval(-100, 100),
// }));

const collectionMap = (i: Metadata) => ({
  uri: i.data.uri,
  address: i.mint
});

function Home() {
  const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY;
  const [metadataList, fetchMetadata] = useMetadata();
  const [collections, setCollections] = useState([])
  const [assets, setAssets] = useState([])
  const { data: tokensData } = useQuery(["getTransfers", { address }], getTokens, { enabled: !!address });

  useEffect(() => {
    setAssets(
      get(tokensData, "data", []).filter(t => get(t, 'tokenIcon', false) && get(t, "tokenName", false) && get(t, "tokenSymbol", false)).map((token, i) => ({
        assetImage: get(token, "tokenIcon", ""),
        assetAddress: get(token, "tokenAddress", ""),
        assetName: get(token, "tokenName", ""),
        assetSymbol: get(token, "tokenSymbol", ""),
        assetAmount: get(token, "tokenAmount.uiAmount", 0),
        assetAmountInUSD: randomIntFromInterval(1000, 10000),
        assetPercentChange: randomIntFromInterval(-100, 100),
      }))
    );
  }, [tokensData])

  useEffect(() => {
    fetchMetadata({
      connection,
      ownerAddress: publicKey.toBase58()
    })
  }, [])

  useEffect(() => {
    if(!metadataList || !metadataList.length) return;
    setCollections(metadataList.map(collectionMap))
  }, [metadataList])

  NavigationStore.active('MyCollection');

  return (
    <React.Fragment>

      {/* Main Content - My Collection */}
      {/* Divide into two sections */}
      <div className='flex flex-col md:flex-row mx-3 mt-0 pb-3 '>
        {/* Left section */}
        <div className='w-full bg-[#121212] rounded-t-xl md:rounded-l-xl md:rounded-r-none lg:w-[420px] min-w-[420px] max-w-[420px] md:w-[40%]'>
          {/* Assets View */}
          <AssetsView profileImage={"/images/nfts/"+ randomIntFromInterval(1, 21) +".webp"} 
            walletAddress={address} 
            walletBalance={"17.890.894,24"} 
            walletBalanceChange={randomIntFromInterval(-10000, 10000)} 
            walletBalancePercentChange={randomIntFromInterval(-10.0, 10.0)} 
            assets={assets} onAssetClick={() => {}}></AssetsView>
        </div>
        {/* Right section */}
        <div className='w-full lg:w-full mx-auto bg-[#121212] rounded-b-xl md:rounded-r-xl'>
          {/* Grid of Cards */}
          {
            collections.length > 0 ?
            <MyCollectionView collections={collections}></MyCollectionView>
            : <div className='container mx-auto min-h-screen flex justify-center items-center'>
                <div className='w-16 h-16 place-content-center'>
                  <GameplexLoader />
                </div>
              </div>
          }
        </div>
      </div>

    </React.Fragment>
  );
}

export default Home;
