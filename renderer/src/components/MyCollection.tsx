import NftCollectionCard from "./NftCollectionCard";
import { Button } from "./Button";

function MyCollection({Collection}) {
    return(
        <div>
            {/* // Filter Area */}
            <div className="w-full h-16 flex flex-col md:flex-row">
                <div className="text-xl text-white font-bold p-4 ml-4">All Collection</div>

                <div className="grow"></div>

                {/* Filter Area */}
                <div className="p-2 flex-none">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Collections"/>
                    </div>
                </div>

                <div className="grow"></div>

                {/* Button Area */}
                <div className="flex-none mr-10">
                    <div className="flex flex-col gap-x-4 py-[0.75rem] md:flex-row justify-center">
                        <Button
                            pill={true}
                            outline={true}
                            color="custom"
                        >
                            7 Days
                        </Button>

                        <Button
                            pill={true}
                            outline={true}
                            color="custom"
                        >
                            24 Days
                        </Button>

                        <Button
                            pill={true}
                            outline={true}
                            color="custom"
                        >
                            30 Days
                        </Button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 p-6'>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
            </div>  
        </div>
    );
}

export default MyCollection;