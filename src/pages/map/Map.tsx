import MapWrapper from "./MapWrapper";

export default function Map(){
    return(
        <div className="min-h-screen w-full bg-red-500">
            <MapWrapper
                pins={[
                    <DayOnePin />
                ]}
            />
        </div>
    )
};



const DayOnePin = () => {
    return(
        <foreignObject
            x="530"
            y="720"
            width="220"
            height="150"
        >
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-full text-center pin_title_container text-white text-2xl py-2 rounded-full uppercase bg-white/10 bg-blur-4xl"> Killiecrankie </div>
                <div className="w-[2px] flex-1 bg-white" />
                <div className="size-[41px] bg-white/20 flex items-center justify-center rounded-full">
                    <div className="size-[20px] rounded-full bg-white" />
                </div>
            </div>
        </foreignObject>
    )
}

// const DayOnePin = () => {
//     return(
//         <g
//             className="pin"
//             transform="translate(1300 1600)"
//         >
//             <circle r="20" fill="red" />
//             <text
//             y="-35"
//             text-anchor="middle"
//             fill="white"
//             font-size="40"
//             >
//             Lagoss
//             </text>
//         </g>
//     )
// }