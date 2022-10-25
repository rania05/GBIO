import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Bar1 from '../com/bar1';
import "./Equipe.css";
const Equipe = () => {
  

  return (
      
    <div >
      <Bar1/>
            <div className='str'>
  <h1>Notre Equipe</h1>


<img src='equipe.jpg' alt='ff' className='logoEquipe'></img>
<p>
Nos expert·e·s sont des dirigeant·e·s expérimenté·e·s qui ont occupé des fonctions clés aussi bien dans des entreprises privées que des organisations publiques et parapubliques, en Suisse comme à l’international. Au fil du temps, nous avons également bâti un réseau de partenaires externes spécialisé·e·s. Nous pouvons ainsi faire appel aux meilleurs profils pour compléter les compétences de nos expert·e·s si, par sa complexité, un projet nécessite une expertise très particulière.

Nos expert·e·s et partenaires sont entouré·e·s d’une équipe opérationnelle dévouée et dynamique, qui constitue le cœur de notre Excellence Center. C'est elle qui est chargée de la gestion des projets ainsi que de l’élaboration, du suivi et de la mise en œuvre des solutions développées.
</p>
</div>
    </div>
    
  )
}

export default Equipe;
