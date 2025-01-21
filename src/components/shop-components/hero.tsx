import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="text-center py-10 px-5 sm:px-4 md:px-6 lg:px-8 mx-auto max-w-screen-2xl overflow-x-hidden">
      <h2 className="text-[#737373] font-bold text-[16px] mt-5">WHAT WE DO</h2>
      <h1 className="text-[58px] font-bold mt-3 text-[#252B42]">
        Innovation tailored for you
      </h1>
      <p className="text-[#252B42] mt-5 font-bold text-[14px] flex justify-center items-center gap-1">
        Home <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
        <span className="text-[#737373]">Team</span>
      </p>

      {/* Image Grid */}
      <div className="mt-10 w-full lg:flex  gap-3 ">
  {/* Left Image (Takes 2 Columns on larger screens) */}
  <div className="flex-1 h-auto mt-3">
    <Image
      src="/team1.png"
      alt="team"
      height={530}
      width={700}
      className="w-full h-full rounded-md object-cover"
    />
  </div>

  {/* Right Side Images */}
  <div className="flex-1 h-auto  md:flex flex-col gap-3">
    {/* Top Row of Two Images */}
    <div className="md:flex gap-3">
      <Image
        src="/team2.png"
        alt="team"
        height={240}
        width={241}
        className="w-full md:w-[241px] mt-3 rounded-md flex-1 object-cover"
      />
      <Image
        src="/team3.png"
        alt="team"
        height={240}
        width={241}
        className=" rounded-md w-full mt-3 md:w-[241px] flex-1 object-cover"
      />
    </div>

    {/* Bottom Row of Two Images */}
    <div className="md:flex gap-3">
      <Image
        src="/team4.png"
        alt="team"
        height={240}
        width={241}
        className="flex-1 w-full mt-3 md:w-[241px] rounded-md object-cover"
      />
      <Image
        src="/team5.png"
        alt="team"
        height={240}
        width={241}
        className="rounded-md mt-3 w-full md:w-[241px] flex-1 object-cover"
      />
    </div>
  </div>
</div>

    </div>
  );
}