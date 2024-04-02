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
          <button
            className="btn bg-[#f2d77c] m-1 text-black "
            onClick={() => {
              router.push("/fruit");
            }}
          >
            Fwi
          </button>
          <button
            className="btn bg-[#94d5db] text-white m-1"
            onClick={() => {
              router.push("/rimed");
            }}
          >
            Rimèd Razié
          </button>
          <a
            className="btn bg-[#ff6f00] text-white m-1"
            target="_blank"
            href="https://www.helloasso.com/associations/siano/formulaires/1"
          >
            Contribuer
          </a>
        </div>
      </div>
    </div>
  );
}
