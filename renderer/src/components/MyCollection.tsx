import NftCollectionCard from "./NftCollectionCard";
import { Button } from "./Button";

function MyCollection({ Collection }) {
    return (
        <div className="rounded-xl px-3">
            {/* // Filter Area */}
            <header className="w-100 h-16 flex flex-col md:flex-row sticky z-10 bg-[#121212] pt-3 rounded-xl">
                <h1 className="text-md text-white font-normal px-4 pt-5 w-1/2">NFT Collection&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span className="text-md opacity-40 mt-1">16 items</span></h1>

                {/* Filter Area */}

                <div className="flex justify-end items-center mr-3 w-1/2">
                    <div className="relative">
                        <div className="static top-5 left-3">
                            <select className="absolute top-5 h-10 text-white rounded-l-xl focus:outline-none bg-[#313131] border-[#383838] left-0" title="search" name="cars" id="cars">
                                <option value="volvo" disabled selected>All Filters</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <input type="text" className="h-10 w-full pl-32 pr-20 focus:outline-none text-white bg-[#313131] border-[#383838] flex-auto transition ease-out font-bold rounded-xl placeholder:font-thin placeholder:text-[#FFFFFF33] text-sm px-5 py-3 mr-2 mt-5 mb-5" placeholder="Search collections and creators" />
                        <div className="absolute top-5 right-0"> <button title="search" className="h-10 w-10 text-black rounded-xl bg-[#02FF63] hover:bg-[#02FF63] px-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></button> </div>
                    </div>
                </div>
            </header>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 mx-auto sm:mt-24 md:my-3 bg-[#121212] overflow-y-auto h-[80vh] rounded-r-xl no-scrollbar'>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
                <NftCollectionCard CollectionName="Bizarre Platypus" CollectionDesc="We came from Cyrus to change the World. Bizarre Platypus is a Collection based on…" CollectionImage="/images/nft.jpg"></NftCollectionCard>
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