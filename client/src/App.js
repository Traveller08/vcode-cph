import React, { useState } from 'react'
import ProblemCard from './components/problemCard/ProblemCard';
import Navbar from './components/navbar/Navbar';
import WelcomePage from './components/WelcomePage/WelcomePage';
import {Route,Routes} from 'react-router-dom'
import Problem from './components/Problems/Problem';
import Contest from './components/contests/Contest';
const App = () => {
  const [logged,setLogged]=useState(false);
  if(logged || window.localStorage.getItem('user')!=null){
    console.log(window.localStorage.getItem('user'))
    return (
      <>
      
         <Navbar setLogged={setLogged}/> 
          <Routes>
          <Route path='/home' element={"home"} ></Route>
          {/* <Route path='/dashboard' element={"Dashboard"}></Route> */}
          <Route path='/problems' element={<Problem />}></Route>
          <Route path='/contests' element={<Contest />}></Route>
          <Route path='/visualiser' element={"visualiser"}></Route>
          <Route path='/aboutus' element={"aboutus"}></Route>
          <Route path='*' element={"error 404"}></Route>
  
        </Routes>
        </>
      
      )
  }else{
    return (
      <>
      <WelcomePage setLogged={setLogged} />
      </>
    )
  }

}

export default App;

