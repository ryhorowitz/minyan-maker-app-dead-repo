import { useContext } from "react"
import { useParams } from "react-router-dom"
import AppContext from "../AppContext"
// import AppContext from "../AppContext"

function ShulDetail() {
  // on load make a fetch request for data?
  const { shulDetails } = useContext(AppContext)

  console.log('shul services are', shulDetails.services)

  const servicesList = shulDetails.services.map(service => {
    return <li className="list-group-item text-end" key={service.id} >{service.name} {service.parsed_time}</li>
  })

  return (
    <>
      {/* shul info */}
      {/* shul services offered */}
      <div className="container-md my-3">
        <div className="row">
          <div className="col w-50 mx-auto">
            <img src={shulDetails.img}
              className="card-img-top img-fluid"
              alt={shulDetails.name}
            ></img>
          </div>
          <div className="col w-50 mx-auto">
            <div className={`card-body`}>
              <h5 className="card-title text-center">{shulDetails.name}</h5>
              <p className="text-end">{shulDetails.street_address} {shulDetails.city}, {shulDetails.state} {shulDetails.postal_code}</p>
            </div>
            Services are
            <ul className="list-group list-group-flush">
              {servicesList}
            </ul>
          </div>
        </div>

      </div>
    </>
  )

}

export default ShulDetail