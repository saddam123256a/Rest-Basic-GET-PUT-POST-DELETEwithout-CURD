import {useState}from "react"

const User=()=>{
  const[firstName,setFirstName]=useState('Ricky')
  const[lastName,setLastName ]=useState('bAJAJ')
  const[email,setEmail ]=useState('bAJAJ@gmail.com')

const[user,setUser]=useState({
firstName:"Ramesh",
lastName:"fatdsa",
email:"ramesh@gmail.com"
})
function updateUser(){
   // setFirstName('Ram')
    //setLastName('kik')
    //setEmail('sadasd@gmail.com')
  setUser({
    firstName:'Ram',
    lastName:'Jadav',
    email:'rma@gmail.com'
  })
    }
return(
  <div>

    <h1>User Details</h1>
    <p>{user.firstName}</p>
    <p>{user.lastName}</p>
    <p>{user.email}</p>
  <button onClick={updateUser}>UpdateUser</button>
  </div>
)
}
export default User;