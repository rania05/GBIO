import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import ValeurCmp from '../com/ValeurCmp';
import Bar1 from '../com/bar1';

const Valeur = () => {
  

  return (
      
    <div >
       <Bar1/>
            <ValeurCmp/>

    </div>
    
  )
}

export default Valeur;
