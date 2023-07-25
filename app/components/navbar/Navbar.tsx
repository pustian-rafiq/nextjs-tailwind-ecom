import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-slate-300   px-10 py-5 flex justify-between items-start">
      <div className="text-teal-600 text-2xl">
        <Link href={"/"}>Ecom With Tailwind</Link>
      </div>
      <Link href={"/cart"} className="text-2xl text-black flex relative">
        <FaCartPlus />
        <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white-800 bg-red-700 rounded-full text-white absolute -top-2 -right-4">
          3
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
