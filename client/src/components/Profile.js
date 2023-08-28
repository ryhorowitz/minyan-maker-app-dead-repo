import { useContext } from "react"
import AppContext from "../AppContext"

function Profile() {
  const { user, setUser } = useContext(AppContext)

  return (
    <>
      <div class="container my-5">
        <div class="row mx-4">
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">{user.username}</h4>
                <p class="card-text mb-0"><small class="text-body-secondary">Email:</small> {user.email}</p>
                <p class="card-text mb-0"><small class="text-body-secondary">Admin:</small> {user.admin ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Profile