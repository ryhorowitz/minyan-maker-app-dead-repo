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
      </div >
      {/* <!-- Modal --> */}

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
                  <label htmlFor="inputUsername" className="form-label">Username</label>
                  <input type="text"
                    name="username"
                    value={editForm.username}
                    className="form-control"
                    id="usernameUpdate"
                    aria-describedby="usernameUpdate"
                    onChange={handleFormChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail1" className="form-label">Email address</label>
                  <input type="email"
                    name="email"
                    value={editForm.email}
                    className="form-control"
                    id="emailUpdate"
                    aria-describedby="emailUpdate"
                    onChange={handleFormChange} />
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