import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import LogoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import StudyIco from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
return (
    <div id="page-landing">
    <div id="page-landing-content" className="container">
        <div id="logo-container">
            <img src={LogoImg} alt="Coder"/>
            <h2>Plataforma de desenvolvedores On-line</h2>
        </div>

        <img 
        src={landingImg} 
        alt="Plataforma de Coders" 
        className="hero-image"
        />

        <div className="buttons-container">

            <Link to="/study" className="study">
            <img src={StudyIco} alt="Estudar" />   
            Estudar             
            </Link>

            <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Dar Aulas" />   
            Dar Aulas             
            </Link>

        </div>

        <span className="total-connections">
            Total de 200 Conexões já realizadas <img src={PurpleHeartIcon} alt="coraçao roxo"/>
        </span>

    </div>
</div>
)
}

export default Landing;