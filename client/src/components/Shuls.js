import { useContext } from "react"
import AppContext from "../AppContext"
import styles from "./componentStyles/Shuls.module.css"
function Shuls() {
  const { shuls } = useContext(AppContext)

  const shulList = shuls.map(shul => {
    return <div className="col" key={shul.id}>
      <div className="card w-50 mx-auto" key={shul.id}>
        <img src={shul.img}
          className="card-img-top img-fluid"
          alt={shul.name}
        ></img>
        <div className={`card-body ${styles.shulCardBody}`}>
          <h5 className="card-title">{shul.name}</h5>
          <p className="text-end">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
        </div>
      </div>
    </div >
  })
  const shulGrid = <div className="row row-cols-1 g-4">{shulList}</div>
  return (
    <>
      <div>All Shuls</div>
      <ul>{shulGrid}</ul>
    </>
  )
}

export default Shuls