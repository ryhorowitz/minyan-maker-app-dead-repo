import { useContext, useEffect } from "react"
import AppContext from "../AppContext"

function ShulDetail() {
  const { shulDetails, setShulDetails, user } = useContext(AppContext)

  useEffect(() => {
    return () => {
      // Update state just before the component unmounts
      setShulDetails({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRSVP(serviceId, e) {
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user.id,
        service_id: serviceId
      })
    }

    fetch(`/user_service/`, postObj)
      .then(r => r.json())
      .then(data => {
        console.log('rsvp response', data)
      })
  }
  const servicesList = shulDetails.services.map(service => {
    return <li className="list-group-item"
      key={service.id} >
      <div className="row row-cols-2">
        <div className="col-3">
          <button type="button"
            className="btn btn-primary btn-sm"
            id={`service-${service.id}`}
            onClick={(e) => handleRSVP(service.id, e)}>RSVP</button>
        </div>
        <div className="col-9">
          {service.name} {service.parsed_time}
        </div>
      </div>
    </li>
  })

  return (
    <>
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
            <h4>Daily Services:</h4>
            <ul className="list-group list-group-flush">
              {servicesList.length > 0 ? servicesList : 'No Services at the moment'}
            </ul>
            <p className="fs-6">Click RSVP button to confirm that you are joining tomorrows minyan.</p>
          </div>
        </div>

      </div>
    </>
  )

}

export default ShulDetail