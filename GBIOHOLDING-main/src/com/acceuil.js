import React from 'react';
import {Link} from 'react-router-dom';

import {Route,Routes} from 'react-router-dom';
import Bar from './bar';
import Home2 from './Home2';
import Footer2 from './Footer2';
import MoreDeets from './Decouvrir';
  import Conseils from './conseils';
import Bar1 from './bar1';
import { createBrowserHistory } from 'history'



function Acceuil() {


  return (
    <div >
     
     <Bar1/>
     <Home2/>
 
     <Conseils/>
    


    <Footer2/>
    </div>
 
  );
}

export default Acceuil;
