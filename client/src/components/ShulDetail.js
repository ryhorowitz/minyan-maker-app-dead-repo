import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AppContext from "../AppContext"

function ShulDetail() {
  // on load make a fetch request for data?
  const [shul, setShul] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`/shuls/${id}`)
      .then(r => r.json())
      .then(shul => setShul(shul))
  }, [id])

  return (
    <>
      {/* shul info */}
      {/* shul services offered */}
      <div className="container-md my-3">
        <div className="row">
          <div className="col w-50 mx-auto">
            <img src={shul.img}
              className="card-img-top img-fluid"
              alt={shul.name}
            ></img>
            <div className={`card-body`}>
              <h5 className="card-title text-center">{shul.name}</h5>
              <p className="text-end">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
            </div>
          </div>
          <div className="col w-50 mx-auto">
            Services are
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )

}

export default ShulDetail