import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='partie1'>
      <h1>actualités</h1>
      <h1>confidentialité</h1>
      <h1>carrière</h1>
      <p>M&BD rassemble une somme d’expérience de direction stratégique inégalée sur le marché. Notre mission ? Mettre ces compétences au service de votre entreprise pour vous permettre d’accélérer et d’amplifier l'atteinte de vos objectifs.
      </p>
<img src='/footer.png' alt='444'></img>


      </div>

      <div className='partie2'>
          <div>
<a href='#'>Suivez-nous sur Linkedin</a> <br/><br/>
<a href='#' >+41 22 575 33 77</a><br/><br/>
<a  href='#'>info@mbdconsulting.ch
</a><br/>
</div>
<h1 className='adressh1'>Adress</h1>
<div className='adress'>
    
    <div className='adress1'>
    <a href='#'>Avenue d'Ouchy 4</a> <br/><br/>
<a href='#' >1006 Lausanne</a><br/><br/>
<a  href='#'>Suisse
</a>
    </div>
    <div className='adress2'>
    <a href='#'>Rue de Cornavin 11</a> <br/><br/>
<a href='#' >1201 Genève</a><br/><br/>
<a  href='#'>Suisse
</a>
    </div>
</div>

      </div>
    </div>
  )
}
