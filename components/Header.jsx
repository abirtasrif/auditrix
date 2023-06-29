import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-black/95">
      <div className="container mx-auto w-full h-32 flex items-center justify-between relative">
        <div className="left">
          <p className="text-4xl text-[#D4E4F3] font-bold mt-[-1rem]">
            auditrix
            <span className="text-[#99be20] text-6xl">.</span>
          </p>
        </div>
        <div className="right flex flex-row text-[#D4E4F3] gap-5 font-medium mt-12 text-lg">
          <Link href="/about">About Us</Link>
          <p>Accounting services</p>
          <p>Tax Servcies</p>
          <p>Contact</p>
          <p className="border border-[#D4E4F3] rounded-full p-2 absolute right-0 top-6 tracking-widest">
            Free Consultation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
