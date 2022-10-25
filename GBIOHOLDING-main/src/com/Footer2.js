import React from 'react'
import "./home1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer2() {
  
  return (
    
    <div className='footer2'>
     
<br></br>
<br></br>
&nbps;&nbps;<p><b> Adresse : </b>01 rue de  cité lac </p><p><b> Téléphone :</b> +216 2222222</p><p><b>  Mail  :</b> gbiotn@gmail.com</p>
  

<div className='footerbg'>

<a href="https://www.facebook.com/Businessline.tn/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/gbioca.tn/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>


      <a href="https://www.linkedin.com/company/business-line-1/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>



  </div>








    </div>
  )
}
