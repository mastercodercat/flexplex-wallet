import useHomePage from "../../src/hooks/useHomePage";
import NavigationStore from "../../src/store/NavigationStore";
import HomeComponent from "./components/HomeComponent";

// Dummy Assets - Replace with real ones
// const coins = [
//   "/images/coins/ada.png",
//   "/images/coins/avax.png",
//   "/images/coins/doge.png",
//   "/images/coins/link.png",
//   "/images/coins/matic.png",
//   "/images/coins/near.png",
//   "/images/coins/shib.png",
//   "/images/coins/tether.png",
// ];

// const assets = coins.map((coin) => ({
//   assetImage: coin,
//   assetName: coin.split("/")[3].split(".")[0],
//   assetSymbol: coin.split("/")[3].split(".")[0].toUpperCase(),
//   assetAmount: randomIntFromInterval(1, 100),
//   assetAmountInUSD: randomIntFromInterval(1000, 10000),
//   assetPercentChange: randomIntFromInterval(-100, 100),
// }));

function Home() {
  const address = process.env.NEXT_PUBLIC_SOL_PUBLIC_KEY || "";

  const { assets, collections } = useHomePage();

  NavigationStore.active("MyCollection");

  return (
    <HomeComponent
      assets={assets}
      collections={collections}
      address={address}
    />
  );
}

export default Home;
