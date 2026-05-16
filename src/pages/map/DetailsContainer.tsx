import type React from "react";

export default function DetailsContainer({detailsContainerRef, containerContentRef}:{detailsContainerRef: React.RefObject<any>, containerContentRef: React.RefObject<any>}){
    return(
        <div className="fixed top-0 right-[-744px] page_details_container h-screen w-[744px] overflow-hidden" ref={detailsContainerRef}>
            <div className="px-[50px] pt-[40vh] text-6xl space-y-20 text-white font-extrabold" ref={containerContentRef}>
                {[1,2,3,4,5,6,7,8,9,9,0,1,2,2,3,2,3,3,3,3,3,3,4,4,2,3,4,3,23,34,3,3,3,4,2,3,4,23,3,4,2,3,4,3,4,4,3,3,3].map((_, index) => (
                    <h2 key={index}>Hello world</h2>
                ))}
            </div>
        </div>
    )
}