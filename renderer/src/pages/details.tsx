import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import CollectionDetailsView from '../views/collectionDetailsView';


const navigation = [
  { name: 'My Collection', href: '/home', active: true },
  { name: 'Activity', href: '/activity', active: false },
  { name: 'Settings', href: '/settings', active: false },
]

// Dummy Detailed COllection
const collectionDetails = {
  name: "Bizarre Platypus",
  description: "Who are we? Who was our creator? We are tired of hearing all kind of jokes when we show up in any bar of the galaxy: I bet that your father is a crocodile and your mother is a duck… My cousin Harold is exactly like you without the duck’s mouth.",
  image: "/images/nfts/1.png",
  price: 1.8,
  tag: 8765,
  details: [
    {key: "Mint address", value: "Lmahm … pfB"},
    {key: "Mint address", value: "Lmahm … pfB"},
    {key: "Mint address", value: "Lmahm … pfB"},
    {key: "Mint address", value: "Lmahm … pfB"},
    {key: "Mint address", value: "Lmahm … pfB"},
    {key: "Mint address", value: "Lmahm … pfB"},
    {key: "Mint address", value: "Lmahm … pfB"},
  ],
  attributes: [
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
    {key: "Clothes", value: "Panxer", rarity: 2},
  ],
  activities: [
    {key: "", value: ""},
    {key: "", value: ""},
    {key: "", value: ""},
    {key: "", value: ""},
  ]
}


function Details() {
  return (
    <React.Fragment>
      <Head>
        <title>Gameplex</title>
      </Head>

      <div className='h-[100vh] bg-[#1e1e1e]'>
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        {/* Collection Details View */}
        <CollectionDetailsView collectionDetails={collectionDetails} backButtonPath={"/home"}/>

      </div>
    </React.Fragment>
  );
}

export default Details;
