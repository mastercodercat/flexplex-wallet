import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import MyCollectionView from "../views/myCollectionView";
import CollectionDetailsView from '../views/collectionDetailsView';
import AssetsView from '../views/assetsView';
import { randomIntFromInterval } from '../utils/numberUtils';
import { useMetadata } from '../web3/hooks/useMetadata';
import { publicKey, connection } from '../web3/config';
import { Metadata } from '../web3/schema/metadata';
import { useQuery } from 'react-query';


const navigation = [
  { name: 'My Collection', href: '/home', active: true },
  { name: 'Activity', href: '/activity', active: false },
  { name: 'Settings', href: '/settings', active: false },
]

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

const assets = coins.map(coin => ({
    assetImage: coin,
    assetName: coin.split("/")[3].split(".")[0],
    assetSymbol: coin.split("/")[3].split(".")[0].toUpperCase(),
    assetAmount: randomIntFromInterval(1, 100),
    assetAmountInUSD: randomIntFromInterval(1000, 10000),
    assetPercentChange: randomIntFromInterval(-100, 100),
}));

const collectionMap = (i: Metadata) => ({
  uri: i.data.uri,
  address: i.mint
});

function Home() {
  const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY;
  const [metadataList, fetchMetadata] = useMetadata();
  const [collections, setCollections] = useState([])

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

  return (
    <React.Fragment>
      <Head>
        <title>Gameplex</title>
      </Head>

      <div className='h-[100vh] bg-[#1e1e1e]'>
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        {/* Main Content - My Collection */}
        {/* Divide into two sections */}
        <div className='flex flex-col md:flex-row mx-3 mt-0 pb-3 '>
          {/* Left section */}
          <div className='w-full bg-[#121212] rounded-t-xl md:rounded-l-xl md:rounded-r-none lg:w-[420px] lg:min-w-[420px] lg:max-w-[420px]'>
            {/* Assets View */}
            <AssetsView profileImage={"/images/nfts/"+ randomIntFromInterval(1, 21) +".webp"} 
              walletAddress={"EP8YfUCpbbLVL3zZUZmDWPboFSjpYaSUYYXKc2HRjft9"} 
              walletBalance={"17.890.894,24"} 
              walletBalanceChange={randomIntFromInterval(-10000, 10000)} 
              walletBalancePercentChange={randomIntFromInterval(-10.0, 10.0)} 
              assets={assets} onAssetClick={() => {}}></AssetsView>
          </div>
          {/* Right section */}
          <div className='w-full lg:w-full mx-auto bg-[#121212] rounded-b-xl md:rounded-r-xl'>
            {/* Grid of Cards */}
            <MyCollectionView Collections={collections}></MyCollectionView>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Home;
