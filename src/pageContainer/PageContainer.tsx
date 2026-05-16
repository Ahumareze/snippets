import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";

export default function PageContainer({children}: {children: ReactNode;}){

    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.2,
          smoothWheel: true,
          touchMultiplier: 2,
        });
    
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    
        return () => {
          lenis.destroy();
        };
      }, []);

    return(
        <div className="min-h-screen w-[100vw] bg-[#B9A695]">
            {children}
        </div>
    )
}