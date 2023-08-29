import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext"

function ShulDetail() {
  const { shulDetails, setShulDetails, user } = useContext(AppContext)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    return () => {
      // Update state just before the component unmounts
      setShulDetails({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleRSVP(serviceId, e) {
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

    const res = await fetch(`/user_service/`, postObj)
    const rsvp = await res.json()
    if (res.ok) {
      console.log('rsvp response', rsvp)
      // add data to FE state
    } else {
      console.log('res errors', rsvp.errors)
      setErrors(rsvp.errors)
    }
  }
  const servicesList = shulDetails.services.map(service => {
    return <li className="list-group-item"
      key={service.id} >
      <div className="row">
        {service.name} {service.parsed_time}
      </div>
      <div className="row text-end">
        {service.parsed_date}
      </div>
      <div className="row">
        <button type="button"
          className="btn btn-primary btn-sm"
          id={`service-${service.id}`}
          onClick={(e) => handleRSVP(service.id, e)}>RSVP</button>
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
            <h4>Next Service is:</h4>
            <ul className="list-group list-group-flush">
              {servicesList.length > 0 ? servicesList : 'No Services at the moment'}
            </ul>
            {errors.length > 0 && (
              <ul style={{ color: "red" }}>
                {errors.map((error) => (
                  <li key={error}> {`RSVP Error: ${error}`} </li>
                ))}
              </ul>
            )}
            <p className="fs-6">Click RSVP button to confirm that you are joining tomorrow's minyan.</p>
          </div>
        </div>

      </div>
    </>
  )

}

export default ShulDetail