import type React from "react";

export default function DetailsContainer({detailsContainerRef, containerContentRef}:{detailsContainerRef: React.RefObject<any>, containerContentRef: React.RefObject<any>}){

    return(
        <div className="fixed top-0 right-[-744px] page_details_container h-screen w-[744px] overflow-hidden" ref={detailsContainerRef}>
            <div className="relative w-full h-screen">
                <div className="px-[110px] pt-[40vh] text-[#EFE5D9]" ref={containerContentRef}>
                    <div className="border-l border-white px-[50px]">
                        <div className="w-[400px]">
                            <h3 className="text-[30px] font-minionPro mb-[40px]">DAY 01</h3>
                            <p className="text-[20px]  font-aktivGrotesk">Guests arrive at Killiecrankie for a relaxed welcome with sparkling tonic and local bites.</p>
                            <p className="text-[20px] mt-[30px] font-aktivGrotesk">A brief introduction sets the tone before heading to the coast.</p>


                            <p className="text-[20px] mt-[50vh] font-aktivGrotesk">At the beach, a short grounding moment invites stillness and arrival, followed by a picnic lunch of crayfish rolls and island produce with the first shared story.</p>

                            <img
                                src="./images/map-image-1.svg"
                                alt=""
                                className="w-full mt-[40px]"
                            />

                            <p className="text-[20px] mt-[50vh] font-aktivGrotesk">After lunch, guests travel south to Castle Rock for a one hour walk and explore, listening to a curated collection of island stories designed for the drives.</p>
                            <img
                                src="./images/map-image-2.svg"
                                alt=""
                                className="w-full mt-[40px]"
                            />
                        </div>
                    </div>
                </div>

                <Navigator />
            </div>
        </div>
    )
};

const Navigator = () => {
    return(
        <div className="w-[48px] h-[350px] rounded-full bg-black/10 bg-blur-xl absolute right-5 top-0 translate-y-1/2">

        </div>
    )
}