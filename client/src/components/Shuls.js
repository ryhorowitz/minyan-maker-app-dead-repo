import { useContext } from "react"
import AppContext from "../AppContext"

function Shuls() {
  const { shuls, setShuls } = useContext(AppContext)

  const shulList = shuls.map(shul => {
    return <div className="card" key={shul.id}>
      <img src={shul.img} class="card-img-top" alt={shul.name}></img>
      <div className="card-body">
        <h5 class="card-title">{shul.name}</h5>
        <div>
          <p class="card-text">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
        </div>
      </div>
    </div>
  })
  // create shul card
  return (
    <>
      Shuls List
      <ol>{shulList}</ol>
    </>
  )
}

export default Shuls