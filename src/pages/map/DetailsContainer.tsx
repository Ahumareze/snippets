import type React from "react";

export default function DetailsContainer({detailsContainerRef, containerContentRef}:{detailsContainerRef: React.RefObject<any>, containerContentRef: React.RefObject<any>}){

    return(
        <div className="fixed top-0 right-[-744px] page_details_container h-screen w-[744px] overflow-hidden" ref={detailsContainerRef}>
            <div className="px-[110px] pt-[40vh] text-[#EFE5D9]" ref={containerContentRef}>
                <div className="border-l border-white px-[50px]">
                    <div className="w-[400px]">
                        <h3 className="text-[30px] font-medium mb-[40px]">Day 01</h3>
                        <p className="text-[20px]">Guests arrive at Killiecrankie for a relaxed welcome with sparkling tonic and local bites.</p>
                        <p className="text-[20px] mt-[30px]">A brief introduction sets the tone before heading to the coast.</p>


                        <p className="text-[20px] mt-[50vh]">At the beach, a short grounding moment invites stillness and arrival, followed by a picnic lunch of crayfish rolls and island produce with the first shared story.</p>

                        <img
                            src="./images/map-image-1.svg"
                            alt=""
                            className="w-full mt-[40px]"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}