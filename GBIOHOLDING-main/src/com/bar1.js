import React from 'react'
import { useState } from 'react'
import "./Bar.css";
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import App from '../App';
export default function Bar1() {
const [state,Setstate]=useState(false);
const showdropdown =()=>{
    Setstate(true);
}
const hidedropdown =()=>{
    Setstate(false);
}


  return (
  


        <div className='navbar'>
   <img src='logo_gbio.png' alt='ff' className='logo'></img>
        
        
        
        <div>
          <ul >
            <li onMouseEnter={showdropdown}  onMouseLeave={hidedropdown}>A propos

{state ?(<>
<div className='drop'>
    <div>
<ul onMouseEnter={showdropdown} >
<Link  to="/"><li >Qui sommes nous? </li></Link>


<Link  to="/Approche"><li>Notre approche<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></li></Link>
<Link  to="/Equipe"><li>Notre équipe<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></li></Link>
<Link  to="/Valeur">
<li>Nos valeurs<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></li></Link>


</ul>
</div>


</div>
</>):null

}


</li>
<Link to="/Discipline"> <li>Nos 7 discipline<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
</svg></li></Link>
<Link  to="/Domaines">
<li>Notre domaine sectoriel<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
</svg></li></Link>


<Link  to="/Newsletter">   <li>Newsletter<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
</svg></li>
</Link>

         
          </ul>
        </div>
        
         </div>
    
      
  )
}
