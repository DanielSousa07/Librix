import { React, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Header from "../components/Header";
import "../styles/Contact.css";
import { startLibrasRain } from '../utils/librasRain';

export default function Contato() {
  useEffect(() => {
    startLibrasRain();
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <canvas id="libras-rain"></canvas>
      <Header />

      <section className="contact-section">
        {/* Bgzinhos */}
        <div class="floating-shape shape1"></div>
        <div class="floating-shape shape2"></div>

        <div className="contact-wrapper">
          {/* ===========================================================
                COLUNA ESQUERDA
          =========================================================== */}
          <div className="contact-left" data-aos="fade-right">
            <h1>Vamos conversar!</h1>
            <p >
              Entre em contato com nossa equipe. Estamos aqui para te ajudar!
            </p>

            <div className="info-card">
              <i className="ri-map-pin-line"></i>
              <div>
                <h4>Endereço</h4>
                <p>Chimarrão - MA, Brasil</p>
              </div>
            </div>

            <div className="info-card">
              <i className="ri-phone-line"></i>
              <div>
                <h4>Telefone</h4>
                <p>(86) 9 9999-9999</p>
              </div>
            </div>

            <div className="info-card">
              <i className="ri-mail-line"></i>
              <div>
                <h4>E-mail</h4>
                <p>contatolibrix@gmail.com</p>
              </div>
            </div>

            {/* ======================================
                PERGUNTAS FREQUENTES (FAQ)
            ====================================== */}
            <div className="faq-container" data-aos="fade-up">
              <h3>Perguntas Frequentes</h3>

              <details className="faq-item">
                <summary>Quem desenvolve este projeto?</summary>
                <p>
                  Alunos do curso técnico em Informática do IFMA – Campus Timon.
                </p>
              </details>

              <details className="faq-item">
                <summary>Como posso entrar em contato?</summary>
                <p>Use o formulário ao lado ou nossas redes sociais.</p>
              </details>

              <details className="faq-item">
                <summary>Posso sugerir melhorias?</summary>
                <p>Com certeza! Toda sugestão é bem-vinda.</p>
              </details>
            </div>

            
          </div>

          {/* ===========================================================
                COLUNA DIREITA
          =========================================================== */}
          <div className="contact-right" data-aos="fade-left">
            <form className="contact-form">
              <h2>Envie sua Mensagem</h2>

              <label>Nome</label>
              <div className="input-wrap">
                <i className="ri-user-line"></i>
                <input type="text" placeholder="Digite seu nome" />
              </div>

              <label>E-mail</label>
              <div className="input-wrap">
                <i className="ri-mail-line"></i>
                <input type="email" placeholder="Digite seu email" />
              </div>

              <label>Mensagem</label>
              <div className="input-wrap textarea">
                <i className="ri-chat-3-line"></i>
                <textarea rows="5" placeholder="Digite sua mensagem"></textarea>
              </div>

              <button className="contact-btn">Enviar Mensagem</button>
            </form>

            {/* ======================================
                NOSSA EQUIPE (cards)
            ====================================== */}
            <div className="team-box" data-aos="fade-up">
              <h3>Nossa Equipe</h3>

              <div className="team-grid">
                <div className="team-card">
                  <div className="team-avatar"></div>
                  <h4>Aluno 1</h4>
                  <p>Frontend</p>
                </div>

                <div className="team-card">
                  <div className="team-avatar"></div>
                  <h4>Aluno 2</h4>
                  <p>Backend</p>
                </div>

                <div className="team-card">
                  <div className="team-avatar"></div>
                  <h4>Aluno 3</h4>
                  <p>UI/UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
