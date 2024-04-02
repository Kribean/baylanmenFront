"use client";
import { Sacramento } from "next/font/google";
import PlantSection from "@/components/PlantSection/PlantSection";
import NavBar from "@/components/NavBar/NavBar";
import CardRimed from "@/components/CardRimed/CardRimed";
import ListSick from "@/components/ListSick/ListSick";
const sacramento = Sacramento({ weight: ["400"], subsets: ["latin"] });

export default function RimedPage() {
  return (
    <main className="flex flex-col items-center w-full bg-[#1b625c] pb-4 relative">
      <NavBar />
      <h1 className="text-xl text-white font-bold">Rimèd Razié</h1>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        {/**<ListSick /> */}
      </div>
      <div>
        <CardRimed
          vernacularName={"verna"}
          scientificName={"sientific"}
          description={"kjhjjhj"}
          listSickness={["ichi", "ni"]}
          rateEff={0}
          ratePois={0}
        />
        <CardRimed
          vernacularName={"verna"}
          scientificName={"sientific"}
          description={"kjhjjhj"}
          listSickness={["ichi", "ni", "kjhkjhkhkhjkh"]}
          rateEff={0}
          ratePois={0}
        />
      </div>
    </main>
  );
}
