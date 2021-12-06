import React from 'react';
 
function Dashboard(props) {
  
 
  const logout=()=>{
    localStorage.removeItem("email");
    localStorage.clear();
  }
 
  return (
    <div align="center">
    <h3>Welcome {localStorage.getItem("email")} User! </h3><br /><br />
    
    <a href="/Login" onClick={logout}> logout <br/> <img src="lkl.png"  width="100px"></img> </a> 
    </div>
    
  );
}

 
export default Dashboard;