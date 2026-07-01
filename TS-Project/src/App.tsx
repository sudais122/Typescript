import { useState } from 'react'
import './App.css'


type User = {
  name: string,
  age: number,
  CNIC?: string
}


type Admin = {
  isadmin: boolean,
  adminid: number,
  adminMessage: string
}


type NewUser = User & Admin



const Userpass = "userpassword"
const Adminpass = "adminpass"



const App = () => {


  const [users, setUsers] = useState<NewUser[]>([])

  const [login, setLogin] = useState(false)

  const [password, setPassword] = useState("")


  const loginUser = () => {

    setUsers([
      {
        name: "M Sudais",
        age: 20,
        CNIC: "1630195345650",
        isadmin: false,
        adminid: 12,
        adminMessage: ""
      },

      {
        name: "M Ali",
        age: 21,
        CNIC: "16195345650",
        isadmin: true,
        adminid: 123,
        adminMessage: "Admin Console"
      }

    ])

    setLogin(true)

  }



  const logout = () => {

    setUsers([])
    setLogin(false)
    setPassword("")

  }



  return (

    <div>


      {
        !login &&

        <button onClick={loginUser}>
          Login
        </button>

      }



      {
        login &&

        <>

          <input
            type="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
          />



          {
            password === Userpass &&

            users
              .filter(user => !user.isadmin)
              .map(user => (

                <div key={user.name}>

                  <h1>{user.name}</h1>
                  <h2>{user.age}</h2>
                  <h3>{user.CNIC}</h3>

                </div>
              ))

          }



          {
            password === Adminpass &&

            users
              .filter(user => user.isadmin)
              .map(user => (

                <div key={user.name}>

                  <h1>{user.name}</h1>
                  <h2>{user.age}</h2>

                  <h3>
                    Admin ID: {user.adminid}
                  </h3>

                  <h4>
                    {user.adminMessage}
                  </h4>

                </div>

              ))

          }


          <button onClick={logout}>
            Logout
          </button>

        </>

      }


    </div>

  )

}


export default App