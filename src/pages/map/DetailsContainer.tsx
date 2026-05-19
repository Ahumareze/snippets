import type React from "react";
import SquigglyLine from "../../components/SquigglyLine";

export default function DetailsContainer({detailsContainerRef, containerContentRef}:{detailsContainerRef: React.RefObject<any>, containerContentRef: React.RefObject<any>}){

    return(
        <div className="fixed top-0 right-[-744px] page_details_container h-screen w-[744px] overflow-hidden" ref={detailsContainerRef}>
            <div className="relative w-full h-screen">
                <div className="px-[110px] pt-[40vh] text-[#EFE5D9]" ref={containerContentRef}>
                    <div className=" px-[50px] relative">
                        <div className="w-[400px]">
                            <h3 className="text-[30px] font-minionPro mb-[40px]">DAY 01</h3>
                            <p className="text-[20px]  font-aktivGrotesk">Guests arrive at Killiecrankie for a relaxed welcome with sparkling tonic and local bites.</p>
                            <p className="text-[20px] mt-[30px] font-aktivGrotesk">A brief introduction sets the tone before heading to the coast.</p>


                            <div className="mt-[50vh]">
                                <p className="text-[20px] font-aktivGrotesk">At the beach, a short grounding moment invites stillness and arrival, followed by a picnic lunch of crayfish rolls and island produce with the first shared story.</p>

                                <img
                                    src="./images/map-image-1.svg"
                                    alt=""
                                    className="w-full mt-[40px]"
                                />
                            </div>

                            <div className="mt-[50vh]">
                                <p className="text-[20px] font-aktivGrotesk">After lunch, guests travel south to Castle Rock for a one hour walk and explore, listening to a curated collection of island stories designed for the drives.</p>
                                <img
                                    src="./images/map-image-2.svg"
                                    alt=""
                                    className="w-full mt-[40px]"
                                />
                            </div>

                            <div className="mt-[50vh]">
                                <p className="text-[20px] font-aktivGrotesk">At Whitemark Wharf, tea and cake lead into real time, sunset drinks by the water, and a heartfelt community welcome.</p>
                                <img
                                    src="./images/map-image-3.svg"
                                    alt=""
                                    className="w-full mt-[40px]"
                                />
                            </div>
                        </div>

                        <SquigglyLine />
                    </div>
                </div>

                <Navigator />
            </div>
        </div>
    )
};

const Navigator = () => {
    return(
        <div className="w-fit px-[8px] py-[16px] rounded-full bg-black/10 bg-blur-xl absolute right-5 top-0 translate-y-1/2 flex flex-col items-center">
            <div className="size-[32px] rounded-full bg-[#EFE5D9] text-center flex items-center justify-center text-xs text-[#885D52] font-medium">01</div>
            <div className="w-[1px] h-[16px] bg-[#EFE5D966]" />
            <div className="size-[9px] rounded-full bg-[#EFE5D966]" />
            <div className="w-[1px] h-[16px] bg-[#EFE5D966]" />
            <div className="size-[9px] rounded-full border border-[#EFE5D966]" />
            <div className="w-[1px] h-[16px] bg-[#EFE5D966]" />
            <div className="size-[9px] rounded-full border border-[#EFE5D966]" />
            <div className="w-[1px] h-[16px] bg-[#EFE5D966]" />
            <div className="size-[9px] rounded-full border border-[#EFE5D966]" />
            <div className="w-[1px] h-[16px] bg-[#EFE5D966]" />
            <div className="size-[32px] rounded-full border border-[#EFE5D966] text-center flex items-center justify-center text-xs text-[#EFE5D966] font-medium">02</div>
            <div className="w-[1px] h-[24px] bg-[#EFE5D966]" />
            <div className="size-[32px] rounded-full border border-[#EFE5D966] text-center flex items-center justify-center text-xs text-[#EFE5D966] font-medium">03</div>
            <div className="w-[1px] h-[24px] bg-[#EFE5D966]" />
            <div className="size-[32px] rounded-full border border-[#EFE5D966] text-center flex items-center justify-center text-xs text-[#EFE5D966] font-medium">04</div>
        </div>
    )
}