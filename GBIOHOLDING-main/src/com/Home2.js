import React ,{ useState } from 'react'
import "./home1.css";

const truncate = (input) =>
  input.length > 5 ? `${input.substring(0, 35)}...` : input;
  const truncate2 = (input) =>
  input.length > 5 ? `${input.substring(0, 35)}...` : input;
  const truncate3 = (input) =>
  input.length > 5 ? `${input.substring(0, 35)}...` : input;
  const truncate4 = (input) =>
  input.length > 5 ? `${input.substring(0, 35)}...` : input;
export default function Home1() {
  const [showTruncate, setShowTruncate] = useState(true);
  const [showTruncate2, setShowTruncate2] = useState(true);
  const [showTruncate3, setShowTruncate3] = useState(true);
  const [showTruncate4, setShowTruncate4] = useState(true);


  let contentDiagnostic =
    "Pour prendre les bonnes décisions, il faut savoir où on en est. Nous vous offrons la vue d’ensemble que vous n’avez peut-être plus à force d’être submergé·e par les tâches quotidiennes.";
  let contentRecommandation ="Nous avons occupé des postes-clés dans différentes industries, à différents niveaux et sur différents continents. C’est ce qui nous permet d'identifier le meilleur chemin et de vous accompagner vers le succès.";
  let contentOeuvre="Le meilleur des plans ne servira à rien s’il dort dans un tiroir. C'est pourquoi nous nous assurons de vous proposer des solutions réalisables, adaptées à votre réalité. Et, nous pouvons vous guider dans leur mise en oeuvre.";
  let contentSuivie ="Un projet terminé, ce n’est que le début d’une nouvelle étape. Nous vous accompagnons dans la durée pour évaluer la réussite des objectifs et faire les ajustements nécessaires.";
    return (
    <div style={{backgroundColor:'#532121'}}>
      <div className='home11'>
     
       <img src='cover_img.jpg' className='img'/>
       <h1>Des conseils c'est bien , Accompagnés d'action ,c'est mieux . </h1>
          <h1></h1>
          
    
      </div>
<div className='homeimgandwithoutimg'>
<div >
<img  src="img_font.jpg" loading="lazy" alt="Illustration de l'expérience client" class="home-discipline-image"></img>



</div>
<div className='homewithoutimg'>
 <br></br>

<h2>Vous cherchez des consultants qui ne se contentent pas de parler mais agissent concrètement ? 
</h2>
<p  >C’est comme ça que nous travaillons.


<br></br>
<b >Diagnostic:</b>
<br></br>
<p onClick={() => setShowTruncate(!showTruncate)}> {showTruncate ? truncate(contentDiagnostic) : contentDiagnostic}</p>

<br></br>
<b>Recommandations:</b>
<br></br>
<p  onClick={() => setShowTruncate2(!showTruncate2)}>{showTruncate2 ? truncate2(contentRecommandation) : contentRecommandation}</p>

<br></br>
<b >Mise en œuvre:
</b>
<br ></br>
<p onClick={() => setShowTruncate3(!showTruncate3)}>{showTruncate3 ? truncate3(contentOeuvre) : contentOeuvre}</p>

<br></br>

<b >Suivi:
</b>
<p onClick={() => setShowTruncate4(!showTruncate4)}>{showTruncate4 ? truncate4(contentSuivie) : contentSuivie}</p>

<br></br>
</p>


</div>
</div>














    </div>
  )
}
