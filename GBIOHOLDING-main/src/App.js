import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

import {Route,Routes} from 'react-router-dom';
import Bar from './com/bar';
import Home1 from './com/Home1';
import Footer2 from './com/Footer2';
import MoreDeets from './com/Decouvrir';
  import Conseils from './com/conseils';
import Bar1 from './com/bar1';
import { createBrowserHistory } from 'history'
import Approche from './pages/Approche';
import Equipe from './pages/Equipe';
import Valeur from './pages/Valeur';
import Discipline from './pages/Discipline';
import Domaines from './pages/Domaine';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';
import Strategie from './pages/Strategie';
import Home2 from './com/Home2';
import Exemple from './com/Exemple';
import Acceuil from './com/acceuil';

function App() {

  function onNavigateHome() {
    createBrowserHistory.push("/home");
  }

  return (
    <div >
     <Routes>
     <Route path='/' element={<Acceuil/>}/>
       <Route path='/Strategie' element={<Strategie/>}/>
       <Route path='/Approche' element={<Approche/>}/>
       <Route path='/Equipe' element={<Equipe/>}/>
       <Route path='/Valeur' element={<Valeur/>}/>
       <Route path='/Discipline' element={<Discipline/>}/>       
       <Route path='/Domaines' element={<Domaines/>}/>
       <Route path='/Newsletter' element={<Newsletter/>}/>
       <Route path='/Contact' element={<Contact/>}/>
     </Routes>
 
    </div>
 
  );
}

export default App;
