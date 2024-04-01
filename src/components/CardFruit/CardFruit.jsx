export default function CardFruit() {
  return (
    <div className="card w-72 md:w-auto bg-[#94d5db] text-sm m-4">
      <div className="card-body">
        <div className="">
          <h2 className="card-title">Vernacular Name</h2>
          <p>(Scientific Name)</p>
          <p>Description: Small evergreen tree, native to tropical Americ</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-2/3">
            <p>
              Habitat and Distribution: Cultivated in tropical regions
              worldwide.
            </p>
            <p>
              Uses: Fruits consumed fresh or used in juice and dessert
              preparation.
            </p>
            <p>
              Precautions: Some cultivars may contain high levels of latex,
              which can cause allergic reactions.
            </p>
          </div>
          <div className="flex flex-col md:w-1/3">
            <div className="stat">
              <div className="stat-title justify-center text-center">
                Mois de fructification
              </div>
              <div className="stat-value justify-center text-center">11</div>
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
