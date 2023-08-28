import { useContext } from "react"
import AppContext from "../AppContext"

function Shuls() {
  const { shuls } = useContext(AppContext)

  const shulList = shuls.map(shul => {
    return <div className="col">
      <div className="card w-50 mx-auto" key={shul.id}>
        <img src={shul.img}
          class="card-img-top img-fluid"
          alt={shul.name}
        ></img>
        <div className="card-body">
          <h5 class="card-title">{shul.name}</h5>
          <p class="text-end">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
        </div>
      </div>
    </div >
  })
  const shulGrid = <div class="row row-cols-1 g-4"
  >{shulList}</div>
  return (
    <>
      Shuls List
      <ul>{shulGrid}</ul>
    </>
  )
}

export default Shuls