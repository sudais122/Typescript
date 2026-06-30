import {  useState } from 'react'
import './App.css'

type User = {
  name: string,
  age: number,
  CNIC?: string
}

type Admin = {
  isadmin: boolean,
  adminid: number
  adminMessage: string
}

type NewUser = User & Admin;

const App = () => {

  const [user, setuser] = useState<NewUser[]>([])
  const [login, setlogin] = useState<boolean>(false)

  const loginuser = () => {

    setuser([
      {
        name: 'M Sudais',
        age: 20,
        CNIC: '1630195345650',
        isadmin: false,
        adminid: 12,
        adminMessage: ""
      },
      {
        name: 'M Ali',
        age: 21,
        CNIC: '16195345650',
        isadmin: true,
        adminid: 123,
        adminMessage: "Admin Console"
      }
    ])
    setlogin(true);
  }

  function logout() {
    setlogin(false);
    setuser([])
  }


  return (
    <div className="container">
      <button
        className="btn"
        onClick={login ? logout : loginuser}
      >

        {login ? "Logout" : "Login"}

      </button>



      <div className="users">
        {
          user.length > 0 ?

            user.map((item, index) => (
              <>              <div
                className={`card ${item.isadmin ? "admin" : ""}`}
                key={index}
              >

                <h1>{item.name}</h1>

                <p>
                  <b>Age:</b> {item.age}
                </p>

                <p>
                  <b>CNIC:</b> {item.CNIC}
                </p>


                {
                  item.isadmin ?

                    <div className="admin-box">

                      <h3>ADMIN</h3>

                      <p>
                        Admin ID: {item.adminid}
                      </p>

                      <p>
                        {item.adminMessage}
                      </p>

                    </div>

                    :

                    <p className="normal">
                      Normal User
                    </p>

                }
              </div>
              </>

            ))
            :

            <h2>No User</h2>

        }

      </div>

    </div>
  )
}


export default App