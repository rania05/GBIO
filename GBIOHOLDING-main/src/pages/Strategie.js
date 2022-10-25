import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Bar1 from '../com/bar1';
import Conseils from '../com/conseils';
import Client from '../com/Client';
import Decouvrir from '../com/Decouvrir';
import Footer from '../com/Footer';
import Footer2 from '../com/Footer2';

const Strategie = () => {
 
  return (
      
    <div >
    
    <Bar1/>
    <Conseils/>
    <Decouvrir/>
    <Footer/>
    <Footer2/>

    </div>
    
  )
}

export default Strategie;
