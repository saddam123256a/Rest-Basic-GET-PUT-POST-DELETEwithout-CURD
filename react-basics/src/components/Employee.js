import React from 'react';
class Employee extends React.Component{

constructor(props){
  super(props)
  this.state={
    firstName:"Ramesh",
    lastName:"Fadate",
    email:"jsajdja@gmail.com"
  };
}

updateEmployee(){
  this.setState({
    firstName:"Ram",
    lastName:"Jadav",
    email:"jddj@gamil.com"
  })
}
render(){
  return(
    <div>
    <h1>Employee details</h1>
    <p>{this.state.firstName}</p>
    <p>{this.state.lastName}</p>
    <p>{this.state.email}</p>
    <button onClick={()=>this.updateEmployee()}>updateEmployee</button>



    </div>



  );
}


}
export default Employee