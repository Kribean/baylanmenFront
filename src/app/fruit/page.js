"use client";
import CardFruit from "@/components/CardFruit/CardFruit";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";

export default function FruitPage() {
  const [fruitList, setFruitList] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/fruit/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error(" A mistake has been done");
      })
      .then((data) => {
        setFruitList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="flex flex-col items-center w-full bg-[#1b625c] pb-4 relative">
      <NavBar />
      <h1 className="text-xl text-white font-bold">Fwi</h1>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        {/**         <label className="input input-bordered flex items-center gap-2 w-1/2">
          <input type="text" className="grow" placeholder="Rechercher..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>*/}
      </div>
      <div className="flex flex-wrap w-full">
        {fruitList.map((element, index) => (
          <CardFruit
            key={index}
            vernacularName={element.nom_vernaculaire}
            scientificName={element.nom_scientifique}
            description={element.description_botanique}
            habitat={element.habitat_et_distribution}
            use={element.utilisations}
            precaution={element.precautions}
            month={element.mois_de_debut_de_fructification}
          />
        ))}
      </div>
    </main>
  );
}
