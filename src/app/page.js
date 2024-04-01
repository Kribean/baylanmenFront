import { Sacramento } from "next/font/google";
import PlantSection from "@/components/PlantSection/PlantSection";
const sacramento = Sacramento({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-[#1b625c] pb-4 relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              className={
                "mb-5 text-5xl text-black font-bold font-sacramento font-normal " +
                sacramento.className
              }
            >
              Baylanmen
            </h1>
            <p className="mb-5 text-black">
              Base de données antillo-guyanaise : recueil de plantes médicinales
              et de fruits régionaux.
            </p>
          </div>
        </div>
      </div>

      <PlantSection />
    </main>
  );
}
