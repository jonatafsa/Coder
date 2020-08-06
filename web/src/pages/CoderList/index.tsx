import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Logo from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';

import PageHeader from '../../components/PageHeader';
import CoderItem from '../../components/CoderItens';


function CoderList() {
    return (
       <div id="page-coder-list" className="container">
            <PageHeader title="Esses são os desenvolvedores ativos no momento.">
                <form id="search-coders">
                    <div className="input-block">
                        <label htmlFor="subjet">Materia</label>
                        <input type="text" id="subjet" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                    
                </form>
            </PageHeader>

            <main>
                <CoderItem />
            </main>
       </div>
    )
}

export default CoderList;