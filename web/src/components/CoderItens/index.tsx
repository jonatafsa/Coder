import React from 'react'

import './styles.css'

import Whats from '../../assets/images/icons/whatsapp.svg';

function CoderItem() {
    return (
        <article className="coder-item">
        <header>
            <img src="https://mh-1-rest.panthermedia.net/media/previews/0015000000/15768000/15768832_preview.jpg" alt=""/>
            <div>
                <strong>Diego Fernandes</strong>
                <span>PHP</span>
            </div>
        </header>
                    <p>
                    Coder em Php que só faz Gambiarra
                    <br /> <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
        <footer>
            <p>
            Preço/Hora
            <strong>R$ 150,00</strong>
            </p>
            <button type="button">
            <img src={Whats} alt="Whatsapp"/>
            Entrar em Contato
            </button>
        </footer>
    </article>
    )
}


export default CoderItem