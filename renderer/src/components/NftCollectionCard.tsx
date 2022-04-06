import Image from 'next/image';

function NftCollectionCard({CollectionName, CollectionDesc, CollectionImage}) {
    return(
        <div className="w-min bg-white rounded-lg border border-gray-200 shadow-md dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
            <div className="h-56 w-56 relative">
                <a href="#">
                    <Image
                        src={CollectionImage}
                        alt="Collection Image"
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        className="rounded-lg" // just an example
                    />
                </a>
            </div>
            <div className="px-4 py-4">
                <a href="#">
                    <h5 className="pb-1 text-sm font-bold text-center tracking-tight text-gray-900 dark:text-white">{CollectionName}</h5>
                </a>
                <p className="text-xs font-normal text-gray-700 dark:text-gray-400">{CollectionDesc}</p>
            </div>
        </div>
    );
}

export default NftCollectionCard;