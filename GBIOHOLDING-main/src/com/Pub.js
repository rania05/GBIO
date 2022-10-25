import React,{useState} from 'react'
import'./Pub.css';
export default function Pub() {
    const [state,Setstate]=useState(false);
    const showicon =()=>{
        Setstate(true);
    }
    const hideicon =()=>{
        Setstate(false);
    }
    const [state1,Setstate1]=useState(false);
    const showicon1 =()=>{
        Setstate1(true);
    }
    const hideicon1 =()=>{
        Setstate1(false);
    }




  return (
    <div className='puball'>
<h1>Nos dernières publications</h1>
      <div className='pub1'>
<div className='pub2'>

<h2>Gouvernance d’entreprise : avez-vous déjà envisagé un Advisory Board ?</h2>
<h4>08.02.2022,Krislane Cosentino</h4>

<img  onMouseEnter={hideicon}  onMouseLeave={hideicon} className='pubimg1' src='/fff.jpeg' alt='555'></img>
{state? (<>
<div className='ahmed'>
<svg  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
</div>
</>):null

}
<h5>Gouvernance </h5>
</div>
<div className='pub3'>
<h2>L’e-commerce : la fin des boutiques traditionnelles ? </h2>
<h4>23.12.2021,Christopher M'Baka</h4>
<img  onMouseEnter={hideicon1}  onMouseLeave={hideicon1} className='pubimg1' src='/ffff.jpeg' alt='555'></img>

{state1? (<>
<div className='ahm'>
<svg  xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
</div>
</>):null

}

<h5>Marketing & Développement des affaires</h5>
</div>


      </div>

    </div>
  )
}
