export default function CardRimed(props) {
  return (
    <div className="card w-72 md:w-auto bg-[#f2d77c] text-sm m-4">
      <div className="card-body">
        <div className="">
          <h2 className="card-title">{props.vernacularName}</h2>
          <p>{"(" + props.scientificName + ")"}</p>
          <p>Description: {props.description}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap md:w-1/2">
            {props.listSickness.map((element, index) => (
              <div key={index} className="badge badge-secondary m-1">
                {element}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:w-auto">
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Efficacité</div>
                <div className="stat-value">
                  {props.rateEff} <span className="text-sm">/10</span>
                </div>
                <div className="stat-desc">
                  Consulter un <br />
                  spécialiste pour toute prise
                </div>
              </div>

              <div className="stat ">
                <div className="stat-title">Toxicité</div>
                <div className="stat-value">
                  {props.ratePois} <span className="text-sm">/10</span>
                </div>
                <div className="stat-desc">
                  Consulter un <br />
                  spécialiste pour toute prise
                </div>
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
