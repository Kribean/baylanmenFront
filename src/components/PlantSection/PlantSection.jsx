"use client";

import CardPres from "../CardPres/CardPres";

export default function PlantSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white mb-[20px] "> Fwi Lokal </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <CardPres
            url="ananas.png"
            alt="ananas"
            title="Fwi Lokal"
            colorBgFirstBool={true}
            pageDirection="fruit"
            content="Présentation des fruits locaux et informations : Cette section propose une variété de fruits originaires des Antilles-Guyanes. Chaque fruit révèle une diversité de saveurs et de bienfaits naturels. Explorez cette collection pour découvrir les richesses que ces fruits ont à offrir."
          />
          <CardPres
            url="plant.png"
            alt="plante médicinale"
            title="Rimèd Razié"
            pageDirection="rimed"
            colorBgFirstBool={false}
            content="Ssélection exhaustive de plantes aux propriétés thérapeutiques, toutes originaires des Antilles-Guyanes. Chaque plante offre un potentiel médicinal unique, utilisé depuis des générations par les populations locales pour traiter divers maux et promouvoir le bien-être."
          />
        </div>
      </div>
    </div>
  );
}
