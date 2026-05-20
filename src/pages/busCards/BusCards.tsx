
export default function BusCards() {
  return (
    <div
      className="h-screen w-full overflow-hidden flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[#f0f0f0]"
      style={{
        backgroundImage: "url(/images/GoogleMapTA.webp)",
      }}
    >
      <BusCard />
    </div>
  );
}

const BusCard = () => {
    return(
        <div className="w-[400px] h-fit bg-white shadow-md rounded-2xl p-3 flex items-center gap-3">
            <div className="h-[100px] w-[100px] rounded-xl bg-[#f5f5f5] overflow-hidden">
                <img
                    src="/images/apartment-1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <h2>LEKKI - ISOLO</h2>
            </div>
        </div>
    )
}