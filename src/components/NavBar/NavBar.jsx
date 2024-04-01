"use client";
import { Sacramento } from "next/font/google";
import { useRouter } from "next/navigation";
const sacramento = Sacramento({ weight: ["400"], subsets: ["latin"] });

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="navbar glass text-primary-content">
      <div className="flex-1">
        <button
          onClick={() => {
            router.push("/");
          }}
          className={"btn btn-ghost text-xl text-white " + sacramento.className}
        >
          Baylanmen
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="flex md:flex-row flex-col">
          <button className="btn btn-ghost text-white ">Fwi</button>
          <button className="btn btn-ghost text-white ">Rimèd Razié</button>
          <button className="btn btn-ghost text-white ">Faire un don</button>
        </div>
      </div>
    </div>
  );
}
