import React, { useState } from "react";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import ArrastaModal from "../components/ArrastaModal";
import CacaModal from "../components/CacaModal";
import VideoQuizModal from "../components/VideoQuizModal";
import "../styles/Jogos.css";

export default function Jogos() {
  const [arrastaModalOpen, setArrastaModalOpen] = useState(false);
  const [cacaModalOpen, setCacaModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="jogos-page">
      <main className="jogos-main">
        
        <section className="jogos-hero">
          <div className="jogos-hero-bg" aria-hidden="true">
            <span className="jogos-bg-main"></span>
            <span className="jogos-bg-orb jogos-bg-orb-1"></span>
            <span className="jogos-bg-orb jogos-bg-orb-2"></span>
            <span className="jogos-bg-line jogos-bg-line-1"></span>
            <span className="jogos-bg-line jogos-bg-line-2"></span>
            <span className="jogos-bg-glow"></span>
            <span className="jogos-bg-card"></span>
          </div>
          <Header />
          <div className="jogos-hero-inner">
            <div className="jogos-left">
              <span className="jogos-badge">Jogos Educativos</span>
              <h1>Aprendendo de forma divertida</h1>
              <p className="jogos-lead">
                Aprenda Libras jogando com atividades interativas feitas para
                tornar o estudo mais leve, visual e envolvente.
              </p>
              <p className="jogos-text">
                Aqui voc&ecirc; pode praticar o alfabeto em Libras com desafios,
                associa&ccedil;&atilde;o de sinais e v&iacute;deos. A ideia &eacute; transformar o processo
                de aprendizagem em uma experi&ecirc;ncia din&acirc;mica, acess&iacute;vel e mais
                interessante para qualquer pessoa.
              </p>
              <div className="jogos-actions">
                <a href="#jogos-lista" className="jogos-button primary">
                  Explorar Jogos
                </a>
              </div>
            </div>
            <div className="jogos-right">
              <div className="jogos-preview">
                <div className="jogos-preview-card card-a">
                  <span className="emoji">&#128269;</span>
                  <strong>Ca&ccedil;a ao Sinal</strong>
                  <p>Encontre o sinal correto entre v&aacute;rias op&ccedil;&otilde;es visuais.</p>
                </div>
                <div className="jogos-preview-card card-b">
                  <span className="emoji">&#129306;</span>
                  <strong>Arraste e solte</strong>
                  <p>Associe letras e sinais de forma pr&aacute;tica e visual.</p>
                </div>
                <div className="jogos-preview-card card-c">
                  <span className="emoji">&#127902;</span>
                  <strong>V&iacute;deo desafio</strong>
                  <p>Assista ao v&iacute;deo e descubra qual nome est&aacute; sendo soletrado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="jogos-cards-section" id="jogos-lista">
          <div className="jogos-cards-bg" aria-hidden="true">
            <span className="jogos-cards-bg-main"></span>
            <span className="jogos-cards-bg-panel"></span>
            <span className="jogos-cards-bg-line jogos-cards-bg-line-1"></span>
            <span className="jogos-cards-bg-line jogos-cards-bg-line-2"></span>
            <span className="jogos-cards-bg-glow"></span>
            <span className="jogos-cards-bg-orb"></span>
          </div>

          <div className="jogos-cards-container">
            <div className="jogos-section-head">
              <span className="section-badge">Escolha seu desafio</span>
              <h2>Pratique Libras com atividades interativas</h2>
              <p>
                Cada jogo foi pensado para refor&ccedil;ar o aprendizado de maneira
                simples, divertida e acess&iacute;vel.
              </p>
            </div>
            
            <div className="cards-jogos">
              <GameCard
                titulo="Ca&ccedil;a ao Sinal"
                descricao="Encontre o sinal correto entre v&aacute;rias imagens."
                onClick={() => setCacaModalOpen(true)}
              />
              <GameCard
                titulo="Arraste e solte"
                descricao="Associe as letras com os sinais corretos."
                onClick={() => setArrastaModalOpen(true)}
              />
              <GameCard
                titulo="Descubra pelo v&iacute;deo"
                descricao="Assista ao v&iacute;deo e descubra qual nome est&aacute; sendo soletrado."
                onClick={() => setVideoModalOpen(true)}
              />
            </div>
          </div>
        </section>
      </main>

      
      <ArrastaModal
        open={arrastaModalOpen}
        onClose={() => setArrastaModalOpen(false)}
      />
      <CacaModal
        open={cacaModalOpen}
        onClose={() => setCacaModalOpen(false)}
      />
      <VideoQuizModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}