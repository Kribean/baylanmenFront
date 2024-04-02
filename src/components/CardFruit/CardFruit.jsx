export default function CardFruit(props) {
  return (
    <div className="card w-72 md:w-auto bg-[#94d5db] text-sm m-4">
      <div className="card-body">
        <div className="">
          <h2 className="card-title">{props.vernacularName}</h2>
          <p>{"(" + props.scientificName + ")"}</p>
          <p>Description: {props.descritpion}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-2/3">
            <p>Habitat: {props.habitat}</p>
            <p>Utilités: {props.use}</p>
            <p>Precautions: {props.precautions}</p>
          </div>
          <div className="flex flex-col md:w-auto">
            <div className="stat">
              <div className="stat-title justify-center text-center">
                Mois de fructification
              </div>
              <div className="stat-value justify-center text-center">
                {props.month}
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn">Plus d'information...</button>
        </div>
      </div>
    </div>
  );
}
