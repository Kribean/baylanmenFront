export default function CardRimed() {
  return (
    <div className="card w-72 md:w-auto bg-[#f2d77c] text-sm m-4">
      <div className="card-body">
        <div className="">
          <h2 className="card-title">Vernacular Name</h2>
          <p>(Scientific Name)</p>
          <p>Description: Small evergreen tree, native to tropical Americ</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap md:w-1/2">
            <div className="badge badge-secondary m-1">gastro</div>
            <div className="badge badge-secondary m-1">secondary1</div>
            <div className="badge badge-secondary m-1">secondary2</div>
            <div className="badge badge-secondary m-1">secondary3</div>
            <div className="badge badge-secondary m-1">secondary4</div>
            <div className="badge badge-secondary m-1">secondary1</div>
            <div className="badge badge-secondary m-1">secondary2</div>
            <div className="badge badge-secondary m-1">secondary3</div>
            <div className="badge badge-secondary m-1">secondary4</div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div class="stats stats-vertical shadow">
              <div class="stat">
                <div class="stat-title">Efficacité</div>
                <div class="stat-value">
                  10 <span className="text-sm">/10</span>
                </div>
                <div class="stat-desc">
                  Consulter un <br />
                  spécialiste pour toute prise
                </div>
              </div>

              <div class="stat ">
                <div class="stat-title">Toxicité</div>
                <div class="stat-value">
                  10 <span className="text-sm">/10</span>
                </div>
                <div class="stat-desc">
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
