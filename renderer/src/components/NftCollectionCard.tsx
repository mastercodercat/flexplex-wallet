function NftCollectionCard({ CollectionName, CollectionDesc, CollectionImage }) {
    return (
        <div className="w-min bg-white mt-3 rounded-lg border border-gray-200 shadow-md dark:bg-[#1E1E1E] dark:border-[#1E1E1E] mx-auto">
            {/* <div className="h-56 w-56 relative">
                <a href="#">
                    <Image
                        src={CollectionImage}
                        alt="Collection Image"
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        className="rounded-lg" // just an example
                    />
                </a>
            </div> */}
            <div className="hover:bg-gradient-to-r from-[#6A00FF] to-[#3C00B7] rounded-xl cursor-pointer">
                <div className="h-44 w-44 xl:h-[11rem] xl:w-[13.5rem] relative">
                    <a title="cardImage" href="#">
                        <div className="rounded-xl h-44 w-46 xl:h-[12rem] xl:w-[13.5rem] overflow-hidden">
                            <div className="rounded-xl h-full w-full child hover:scale-110 transition" style={{ backgroundImage: "url(" + `${CollectionImage}` + ")", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        </div>
                    </a>
                </div>
                <div className="p-2 xl:mt-4">
                    <a href="#">
                        <h5 className="pb-1 text-sm font-bold text-center tracking-tight text-gray-900 dark:text-white">{CollectionName}</h5>
                    </a>
                    <p className="text-xs font-normal text-white text-ellipsis line-2-clip overflow-hidden">{CollectionDesc}</p>
                </div>
            </div>
        </div>
    );
}

export default NftCollectionCard;