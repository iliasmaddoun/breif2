import React from "react";
import { render } from '@testing-library/react';
import axios from "axios";

class Register extends React.Component {
  state={
    username:'',
    password:"",
    email:'',
    confirmPassword: '',
}

        
  

fcn=()=>{  
  // axios.get("http://localhost:4000/posts")
  // .then(user=>{
  //   user.data.map(us=>{
  //       if(us.username===this.state.username || us.email===this.state.email)
  //       {alert('user or email exist');}
       
  if(this.state.email !== '' && this.state.password !== '' && this.state.username !== ''&& this.state.confirmPassword !== '' && this.state.password == this.state.confirmPassword )  {
    axios.post("http://localhost:4000/posts",this.state)
    .then(alert("You account is ready now click in login"))
  }
if (this.state.password !== this.state.confirmPassword)
{alert("Passwords don't match");}
  else{
    alert('you have a problem');
  }
}
    




render() {
  return(
  
    <header align="center" className="App-header" >
    <h1>Register page </h1>
    

    <form>
    
    <input type="text" placeholder="username"   onChange={(e)=>this.setState({username:e.target.value})} required /><br/>
    <input type="email"placeholder="email"  onChange={(e)=>this.setState({email:e.target.value})} required/><br/>
    <input type="password" placeholder="password"  onChange={(e)=>this.setState({password:e.target.value})} required/><br/>
    <input type="password" placeholder="confirm password"  onChange={(e)=>this.setState({confirmPassword:e.target.value})}required/><br/> 
    <input type="submit"  value="REGISTER"  onClick={this.fcn} /><br/>
    </form>

   
    
    
  </header>


);
}}
export default Register;