import { useContext, useState } from "react"
import AppContext from "../AppContext"

function Profile() {
  const { user, setUser } = useContext(AppContext)
  const [showModal, setShowModal] = useState(false)
  const [editForm, setEditForm] = useState({
    email: user.email,
    username: user.username
  })

  function toggleModal() {
    setShowModal(!showModal)
  }

  function handleUpdateProfile() {
    console.log('save changes clicked')
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editForm)
    }
    fetch(`/users/${user.id}`, updateOptions)
      .then(r => r.json())
      .then(updatedProfile => {
        console.log('updated profile', updatedProfile)
        const { email, username } = updatedProfile
        setUser({
          ...user,
          username,
          email
        })
        toggleModal()
      })
  }

  function handleFormChange(e) {
    const { name, value } = e.target
    setEditForm({
      ...editForm,
      [name]: value
    })
  }

  function handleDeleteRSVP(userServiceId) {

    fetch(`/user_service/${userServiceId}`, { method: "DELETE" })
  }

  const nextMinyanUserAttending = user.user_services.map(s => {
    // console.log('s is ', s)
    return <li className="list-group-item" key={s.id}>
      <div className="text-end">{s.parsed_time} {s.service_name} {s.parsed_date}</div>
      <div className="text-end">at {s.service_shul_name}</div>
      <button className="btn btn-primary btn-sm"
        type="button"
        id={s.id}
        onClick={() => { handleDeleteRSVP(s.id) }} >Cancel</button>
    </li>
  })
  // I want to display all the users rsvps during the next 24hrs
  return (
    <>
      <div className="container my-5">
        <div className="row mx-4">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{user.username}</h4>
                <p className="card-text mb-0"><small className="text-body-secondary">Email:</small> {user.email}</p>
                <p className="card-text mb-0"><small className="text-body-secondary">Admin:</small> {user.admin ? 'Yes' : 'No'}</p>
              </div>
              <div className="card-footer text-body-secondary text-end">
                <button type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  onClick={toggleModal}
                >Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="mt-3">Going to:</h4>
          <ul className="list-group">
            {nextMinyanUserAttending}
          </ul>
        </div>
      </div >

      {/* <!-- Edit Modal --> */}
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button type="button" className="btn-close" onClick={toggleModal}></button>
            </div>
            <div className="modal-body bg-secondary-subtle">
              <form className="">
                <div className="mb-3">
                  <label htmlFor="usernameUpdate" className="form-label">Username</label>
                  <input type="text"
                    name="username"
                    value={editForm.username}
                    className="form-control"
                    id="usernameUpdate"
                    aria-describedby="usernameUpdate"
                    onChange={handleFormChange}
                    autoComplete="false" />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailUpdate" className="form-label">Email address</label>
                  <input type="email"
                    name="email"
                    value={editForm.email}
                    className="form-control"
                    id="emailUpdate"
                    aria-describedby="emailUpdate"
                    onChange={handleFormChange}
                    autoComplete="false" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button"
                className="btn btn-secondary btn-sm"
                onClick={toggleModal}>Close</button>
              <button type="button"
                className="btn btn-primary btn-sm"
                onClick={handleUpdateProfile}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile