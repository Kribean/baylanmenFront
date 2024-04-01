"use client";
import { Sacramento } from "next/font/google";
const sacramento = Sacramento({ weight: ["400"], subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className="navbar glass text-primary-content">
      <div className="flex-1">
        <button
          className={"btn btn-ghost text-xl text-white " + sacramento.className}
        >
          Baylanmen
        </button>
      </div>
      <div className="flex-none gap-2">
        <button className="btn btn-ghost text-xl text-white ">Fwi</button>
        <button className="btn btn-ghost text-xl text-white ">
          Rimèd Razié
        </button>
      </div>
    </div>
  );
}
