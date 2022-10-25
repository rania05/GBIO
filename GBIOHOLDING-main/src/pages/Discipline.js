import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Bar1 from '../com/bar1';
import Decouvrir from '../com/Decouvrir';
import Home1 from '../com/Home1';
import "../com/home1.css";

const Discipline = () => {
  

  return (
      
    <div >
        <Bar1/>
        <div className='str'>
  <h1>Nos 7 disciplines principales</h1>
  <br></br>
  <p >Nous intervenons à différents moments pour répondre à différentes ambitions.

Audit, conseil, implémentation de solutions ou encore suivi : c’est à vous de décider dans quelle discipline et pour quelles étapes vous souhaitez notre soutien.
</p>
</div>
    <Decouvrir/>


    </div>
    
  )
}

export default Discipline;
