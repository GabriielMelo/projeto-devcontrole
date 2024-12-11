import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";
export default function Header() {
  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl">
        <Link href="/">
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500 ">DEV </span>
            CONTROLE
          </h1>
        </Link>

        <div className="flex items-baseline gap-4">
          <Link href="#">
            <FiUser size={24} color="#020202" />
          </Link>
          <Link href="#">
            <FiLogOut size={24} color="#020202" />
          </Link>
        </div>
      </div>
    </header>
  );
}
