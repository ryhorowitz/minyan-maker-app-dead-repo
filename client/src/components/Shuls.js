import { useContext } from "react"
import AppContext from "../AppContext"

function Shuls() {
  const { shuls, setShuls } = useContext(AppContext)

  const ShuldGridStyle = {
    maxWidth: "40rem",
    Height: "60rem"
  }
  const shulList = shuls.map(shul => {
    return <div className="col">

      <div className="card" key={shul.id}>
        <img src={shul.img} class="card-img-top" alt={shul.name}></img>
        <div className="card-body">
          <h5 class="card-title">{shul.name}</h5>
          <p class="text-end">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
        </div>
      </div>
    </div>
  })
  const shulGrid = <div class="row row-cols-1 row-cols-md-2 g-4"
    style={ShuldGridStyle}
  >{shulList}</div>
  // create shul card
  return (
    <>
      Shuls List
      <ol>{shulGrid}</ol>
    </>
  )
}

export default Shuls