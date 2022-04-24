import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import MyCollectionView from "../views/myCollectionView";
import CollectionDetailsView from '../views/collectionDEtailsView';
import AssetsView from '../views/assetsView';
import { randomIntFromInterval } from '../utils/numberUtils';


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

// Dummy Collections - Replace with real ones
const collections = [
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
  {name:"Bizarre Platypus", description:"We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…", image: `/images/nfts/${randomIntFromInterval(1, 21)}.webp`},
]

function Home() {
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
          <div className='w-full lg:w-[30%] min-w-[396px] md:w-[40%] bg-[#121212] rounded-l-xl'>
            {/* Assets View */}
            <AssetsView profileImage={"/images/nfts/"+ randomIntFromInterval(1, 21) +".webp"} 
              walletAddress={"EP8YfUCpbbLVL3zZUZmDWPboFSjpYaSUYYXKc2HRjft9"} 
              walletBalance={"10,000"} 
              walletBalanceChange={1000.0} 
              walletBalancePercentChange={10.0} 
              assets={assets} onAssetClick={() => {}}></AssetsView>
          </div>
          {/* Right section */}
          <div className='w-full lg:w-[70%] md:w-[60%] mx-auto bg-[#121212] rounded-r-xl'>
            {/* Grid of Cards */}
            <MyCollectionView Collections={collections}></MyCollectionView>
          </div>
        </div>

        {/* Collection Details View */}
        {/* <CollectionDetailsView></CollectionDetailsView> */}
        
      </div>
    </React.Fragment>
  );
}

export default Home;
