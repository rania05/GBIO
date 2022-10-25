import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Bar1 from '../com/bar1';
import Expertise from '../com/DecouvrirCom';
import Home1 from '../com/Home1';
import "../com/home1.css";

const Domaines = () => {
  

  return (
      
    <div >
    
    <Bar1/>
        <div className='str'>
  <h1>Notre expertise sectorielle</h1>
  <br></br>
  <h2>Quel que soit votre secteur d’activité, notre équipe peut vous accompagner ,Un cabinet de conseil se doit de connaître ses clients</h2>

  

  <br></br>
  <p > Notre vocation est d’accompagner les dirigeants d'entreprise à faire face aux défis quotidiens imposés par leur environnement. Dès les premières interactions avec chaque client, nous nous attachons à comprendre les spécificités du secteur d'activité et de l'écosystème dans lequel son organisation évolue.

Grâce à cette approche personnalisée et à l’expérience accumulée par nos experts au fil des ans, M&BD dispose aujourd’hui d’une large connaissance et expertise dans la plupart des secteurs d’activités. Nous travaillons avec des organisations du secteur privé, public et parapublic.

</p>
</div>
    <Expertise/>


    </div>
    
  )
}

export default Domaines;
