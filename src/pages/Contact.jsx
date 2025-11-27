import React from 'react';
import Header from '../components/Header';
import "../styles/Contact.css";

const Contato = () => {
    return (
        <div className="contact-container">

            <section className='contact-section'>
                
                <div className="contact-wrapper">
                    <div className="contact-text">
                        <h1 className='contact-title'>
                            Entre em <span className='highlight'>Contato</span>
                        </h1>
                        <p className="contact-subtitle">
                            Fale com nossa equipe, tire dúvidas ou envie sugestões.
                        </p>
                    </div>
                
                    <form action="" className="contact-form">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" placeholder='Nome Completo' />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder='seuemail@exemplo.com'/>
                        </div>
                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea placeholder='Digite sua mensagem aqui...'/>
                        </div>
                        <button className='cta-button form-btn'>Enviar Mensagem</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Contato;
