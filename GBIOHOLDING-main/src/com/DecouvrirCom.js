import React from "react";
import "./Decouvrir.css";
import { Card } from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [
    {
      image: "/production_indust.jpg",
      title: "Production industrielle",
      text: "Décider où aller, comprendre pourquoi vous devez y aller et savoir comment y aller",
     // dec:"Découvrir",
    },
    {
        image: "/construction .jpg",
        title: "Construction",
        text: "Définir les rôles et responsabilités des décisionnaires à tous les niveaux afin d'assurer le bon fonctionnement de votre entreprise.",
      //  dec:"Découvrir",
      },
      {
        image: "/transport.jpg",
        title: "Transport & Logistique",
        text: "Structurer l'organisation de manière à pouvoir affronter avec succès les défis que votre entreprise va rencontrer.",
       // dec:"Découvrir",
      },
      {
        image: "/img4.Png",
        title: "Services aux entreprises B2B",
        text: "Construire et communiquer votre offre, en ciblant les bons marchés pour créer de la valeur à long terme.",
       // dec:"Découvrir",
      },
      {
        image: "/img5.Png",
        title: "Tourisme ONG",
        text: "Tirer parti des énormes opportunités d’optimisation offertes par les nouvelles technologies.",
      //  dec:"Découvrir",
      },
      {
        image: "/img6.Png",
        title: "Médical Santé  ",
        text: "Mettre en place une culture de l’innovation pour pouvoir évoluer continuellement.",
      //  dec:"Découvrir",
      },
      {
        image: "/img7.Png",
        title: "Luxe Horlogerie",
        text: "Penser au-delà du produit ou du service pour offrir à vos clients une expérience pleinement satisfaisante à tout moment.",
    //    dec:"Découvrir",
      },
      
      {
        image: "/img7.Png",
        title: "IT Télécommunications",
        text: "Penser au-delà du produit ou du service pour offrir à vos clients une expérience pleinement satisfaisante à tout moment.",
    //    dec:"Découvrir",
      },  
       {
        image: "/img7.Png",
        title: "Finance",
        text: "Penser au-delà du produit ou du service pour offrir à vos clients une expérience pleinement satisfaisante à tout moment.",
    //    dec:"Découvrir",
      },  
       {
        image: "/img7.Png",
        title: "Public & Gouvernement & Parapublic",
        text: "Penser au-delà du produit ou du service pour offrir à vos clients une expérience pleinement satisfaisante à tout moment.",
    //    dec:"Découvrir",
      },
    
    
  ];
 
  const renderCard = (card, index) => {
    return (
        <>
        <div className="griditem">
          
            <img  className="cardimg" src={card.image} alt={index}></img>
      <div  className="carddiv">{card.title}</div>
      <p className="cardp">{card.text}</p>
      <h1 className="cardh1">{card.dec}
  
      </h1>
      </div>
      </>
    );
  };

  return <div  className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;