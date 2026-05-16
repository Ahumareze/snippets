import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageContainer from "../../pageContainer/PageContainer";
import MapWrapper from "./MapWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function Map(){
    const cloudTriggerRef = useRef(null);

    const cloudOneRef = useRef(null);
    const cloudTwoRef = useRef(null);
    const cloudThreeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const animations = [
                {
                  ref: cloudOneRef,
                  vars: {
                    top: "-30vh",
                    left: "-130vw",
                    scale: 1.4,
                  },
                },
                {
                  ref: cloudTwoRef,
                  vars: {
                    bottom: "-100vh",
                    right: "-100vw",
                    scale: 1.3,
                  },
                },
                {
                  ref: cloudThreeRef,
                  vars: {
                    top: "-100vh",
                    right: "-100vw",
                    scale: 1,
                  },
                },
            ];

            animations.forEach(({ ref, vars }) => {
                gsap.to(ref.current, {
                  ...vars,
                  ease: "none",
                  scrollTrigger: {
                    trigger: cloudTriggerRef.current,
                    start: "top 95%",
                    end: "bottom 95%",
                    scrub: true,
                    // markers: true,
                  },
                });
            });
        });
    
        return () => ctx.revert();
    }, []);

    return(
        <PageContainer>
            <div className="w-full bg-[#C2AD9A]">
                <MapWrapper
                    pins={[
                        <DayOnePin />
                    ]}
                />

                
                <img
                    src="/images/cloud-1.png"
                    alt="cloud"
                    className="fixed top-[-20px] left-[-200px] scale-110 z-[103] w-[100vw]"
                    ref={cloudOneRef}
                />

                <img
                    src="/images/cloud-1.webp"
                    alt="cloud"
                    className="fixed bottom-[-100px] right-[-200px] z-[101] rotate-[180deg] w-[100vw]"
                    ref={cloudTwoRef}
                />

                <img
                    src="/images/cloud-2.png"
                    alt="cloud"
                    className="fixed top-[-150px] right-0 z-[102] w-[130vw]"
                    ref={cloudThreeRef}
                />
                

                <div className="w-full pt-[100vh]">
                    <div className="h-screen w-full" ref={cloudTriggerRef} />
                </div>
            </div>
        </PageContainer>
        
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