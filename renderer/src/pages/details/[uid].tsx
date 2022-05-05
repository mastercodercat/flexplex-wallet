import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import CollectionDetailsView from "../../views/collectionDetailsView";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getAccount, getMetadata, getTransfers } from "../../web3/solscan/api";
import get from 'lodash.get'

const navigation = [
  { name: "My Collection", href: "/home", active: true },
  { name: "Activity", href: "/activity", active: false },
  { name: "Settings", href: "/settings", active: false },
];

// Dummy Detailed COllection
const collectionDetails = {
  name: "Bizarre Platypus",
  description:
    "Who are we? Who was our creator? We are tired of hearing all kind of jokes when we show up in any bar of the galaxy: I bet that your father is a crocodile and your mother is a duck… My cousin Harold is exactly like you without the duck’s mouth.",
  image: "/images/nfts/1.png",
  price: 1.8,
  tag: 8765,
  details: [
    { key: "Mint address", value: "Lmahm … pfB" },
    { key: "Mint address", value: "Lmahm … pfB" },
    { key: "Mint address", value: "Lmahm … pfB" },
    { key: "Mint address", value: "Lmahm … pfB" },
    { key: "Mint address", value: "Lmahm … pfB" },
    { key: "Mint address", value: "Lmahm … pfB" },
    { key: "Mint address", value: "Lmahm … pfB" },
  ],
  attributes: [
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
    { key: "Clothes", value: "Panxer", rarity: 2 },
  ],
  activities: [
    { key: "", value: "" },
    { key: "", value: "" },
    { key: "", value: "" },
    { key: "", value: "" },
  ],
};

function Details() {
  const router = useRouter();
  const { uid: address } = router.query;
  const { data: tokenData } = useQuery(["getAccount", { address }], getAccount, { enabled: !!address });
  const { data: transfersData } = useQuery(["getTransfers", { address }], getTransfers, { enabled: !!address });
  const uri = get(tokenData, 'data.metadata.data.uri', false);
  const { data: metaData } = useQuery(["getMetadata", { uri }], getMetadata, { enabled: !!uri });

  return (
    <React.Fragment>
      <Head>
        <title>Gameplex</title>
      </Head>

      <div className="h-[100vh] bg-[#1e1e1e]">
        {/* Navbar */}
        <NavBar navigation={navigation} showBrand={true}></NavBar>

        {/* Collection Details View */}
        {tokenData && metaData && <CollectionDetailsView
          collectionDetails={collectionDetails}
          metaData={metaData}
          transfersData={transfersData}
          tokenData={get(tokenData, 'data' ,{})}
          backButtonPath={"/home"}
        />}
      </div>
    </React.Fragment>
  );
}

export default Details;
