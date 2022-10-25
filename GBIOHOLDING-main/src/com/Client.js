import React,{useState} from 'react'
import './Client.css'
export default function Client() {
    const [show,setShow]=useState(true);
   const getshow =()=>{
       setShow(!show);
   }
   setInterval(() => {
       getshow();
   }, 9000);

  return (
    <div className='client'>
      <div className='client1'>
      <h1>Ce que nos clients et partenaires </h1>
      <h1>pensent de nous</h1>
      </div>
<div className='client2'>
    <div  onClick={getshow} className='client21'><svg  xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></div>




    <div className='client22'>

   
   {show? <><p>Les compétences de M&BD ne font aucun doute, tout est à sa place, dans un cadre, avec des délais et des budgets afin de délivrer le meilleur rendu possible.</p>
    <span>Associé dans une entreprise de gestion de fortune</span></>: <>
<p>D’une grande maturité, M&BD est capable de gérer des projets complexes, les démarquant franchement de leurs concurrents.</p>
<span>CEO d’une société financière</span>

    </>

   }
   
   
   
    </div>






















    <div onClick={getshow} className='client23'><svg  xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></div>
</div>
    </div>
  )
}
