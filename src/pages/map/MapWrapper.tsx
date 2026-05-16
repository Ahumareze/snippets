import type { ReactNode } from "react";

export default function MapWrapper({pins}:{pins: ReactNode[]}){
    return(
        <div className="w-[100%] fixed top-0 left-0">
            {/* {pins} */}
            <svg
                viewBox="0 0 2604.51 3148.78"
                xmlns="http://www.w3.org/2000/svg"
            >
                <image
                    href="./images/map.png"
                    width="2604.51"
                    height="3148.78"
                    preserveAspectRatio="xMidYMid meet"
                />
                {pins}

            </svg>
        </div>
    )
}