"use client";
import { Sacramento } from "next/font/google";
import PlantSection from "@/components/PlantSection/PlantSection";
import NavBar from "@/components/NavBar/NavBar";
import CardRimed from "@/components/CardRimed/CardRimed";
import ListSick from "@/components/ListSick/ListSick";
import { useEffect, useState } from "react";
const sacramento = Sacramento({ weight: ["400"], subsets: ["latin"] });

export default function RimedPage() {
  const [rimedList, setRimedList] = useState([]);
  // Clés spécifiées
  const specifiedKeys = [
    "INFLAMMATION_GANGLIONNAIRE",
    "HEPATOPATHIES",
    "NAUSEES",
    "HYGIENE_APRES_ACCOUCHEMENT",
    "PRURIT",
    "RHUMATISMES",
    "CHOC_EMOTIONNEL",
    "RHUME",
    "ANTISPASMODIQUE",
    "MAUX_DE_DENTS_ET_DOREILLE",
    "FLATULENCES",
    "CANDIDOSE_BUCCALE",
    "ASTHME",
    "ASTHENIE",
    "CONSTIPATION",
    "PARASITOSES_INTESTINALES",
    "ANEMIE",
    "CEPHALEE",
    "BRULURES",
    "BLESSURES",
    "PNEUMOPATHIES",
    "DYSPEE",
    "ACTIVITES_PHANNACOLOGIQUES",
    "PEDICULOSE",
    "AMENORRHEE",
    "VERRIGES",
    "VOMISSEMENTS",
    "ENTORSES_TRAUMATISMES",
    "FIEVRE",
    "DIAHREES",
  ];

  // Fonction pour créer une liste des maladies si le paramètre est true
  function getListOfDiseases(obj, specifiedKeys) {
    const diseases = [];
    specifiedKeys.forEach((key) => {
      if (obj[key] === true) {
        diseases.push(key);
      }
    });
    return diseases;
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/rimed/", {
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
        setRimedList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="flex flex-col items-center w-full bg-[#1b625c] pb-4 relative">
      <NavBar />
      <h1 className="text-xl text-white font-bold">Rimèd Razié</h1>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        {/**<ListSick /> */}
      </div>
      <div className="w-full flex flex-wrap">
        {rimedList.map((element, index) => {
          return (
            <CardRimed
              key={index}
              vernacularName={element.vernacular_names}
              scientificName={element.scientific_name}
              description={element.description}
              listSickness={getListOfDiseases(element, specifiedKeys)}
              rateEff={element.efficacy_rating}
              ratePois={element.toxicity_rating}
            />
          );
        })}
      </div>
    </main>
  );
}
