import React, { useEffect, useState, useRef } from "react";
import { perguntas } from "./quizVideos";
import "../styles/VideoQuizModal.css";

export default function VideoQuizModal({ open, onClose }) {
  const [fase, setFase] = useState("intro");
  const [indice, setIndice] = useState(0);
  const [selecionado, setSelecionado] = useState(null);
  const [acertou, setAcertou] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  
  const somAcertoRef = useRef(null);
  const somErroRef = useRef(null);

  useEffect(() => {
    if (open) {
      setFase("intro");
      setIndice(0);
      setSelecionado(null);
      setAcertou(null);
      setPontuacao(0);
    }
  }, [open]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (open) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  const perguntaAtual = perguntas[indice];

  function responder(opcao) {
    if (selecionado) return;
    setSelecionado(opcao);
    if (opcao === perguntaAtual.correta) {
      setAcertou(true);
      setPontuacao((prev) => prev + 1);
      if (somAcertoRef.current) {
        somAcertoRef.current.currentTime = 0;
        somAcertoRef.current.play().catch(() => {});
      }
    } else {
      setAcertou(false);
      if (somErroRef.current) {
        somErroRef.current.currentTime = 0;
        somErroRef.current.play().catch(() => {});
      }
    }
  }

  function proxima() {
    if (indice < perguntas.length - 1) {
      setIndice(indice + 1);
      setSelecionado(null);
      setAcertou(null);
    } else {
      setFase("final");
    }
  }

  function reiniciarJogo() {
    setIndice(0);
    setSelecionado(null);
    setAcertou(null);
    setPontuacao(0);
    setFase("jogo");
  }

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          &times;
        </button>

        {/* INTRO */}
        {fase === "intro" && (
          <div className="video-modal-screen">
            <span className="video-modal-badge">Jogo em Libras</span>
            <h2>Descubra pelo v&iacute;deo</h2>
            <p className="video-modal-text">
              Assista ao v&iacute;deo e escolha a op&ccedil;&atilde;o com o nome correspondente que est&aacute; sendo soletrado. Preste muita aten&ccedil;&atilde;o!
            </p>
            <div className="video-modal-actions">
              <button className="video-modal-secondary" onClick={onClose}>
                Fechar
              </button>
              <button
                className="video-modal-primary"
                onClick={() => setFase("jogo")}
              >
                Come&ccedil;ar
              </button>
            </div>
          </div>
        )}

        {/* JOGO */}
        {fase === "jogo" && perguntaAtual && (
          <div className="video-modal-screen">
            <div className="video-info-row">
              <div className="video-info-pill">
                Rodada <strong>{indice + 1}</strong> de <strong>{perguntas.length}</strong>
              </div>
              <div className="video-info-pill">
                Pontua&ccedil;&atilde;o: <strong>{pontuacao}</strong>
              </div>
            </div>

            <div className="video-progress">
              <div
                className="video-progress-fill"
                style={{
                  width: `${((indice + 1) / perguntas.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${perguntaAtual.youtubeId}?controls=0&autoplay=1`}
                title="video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="video-pergunta">{perguntaAtual.pergunta}</p>

            <div className="video-opcoes">
              {perguntaAtual.opcoes.map((opcao) => {
                let classe = "video-opcao-btn";
                if (selecionado) {
                  if (opcao === perguntaAtual.correta) {
                    classe += " correto";
                  } else if (opcao === selecionado) {
                    classe += " errado";
                  }
                }
                return (
                  <button
                    key={opcao}
                    className={classe}
                    onClick={() => responder(opcao)}
                    disabled={!!selecionado}
                  >
                    {opcao}
                  </button>
                );
              })}
            </div>

            {selecionado && (
              <div className="video-feedback">
                {acertou ? (
                  <p className="certo">&#10004; Muito bem, voc&ecirc; acertou!</p>
                ) : (
                  <p className="errado">
                    &#10006; Ops! A resposta correta &eacute;: <strong>{perguntaAtual.correta}</strong>
                  </p>
                )}
                <button className="video-next-btn" onClick={proxima}>
                  {indice < perguntas.length - 1 ? "Pr\u00f3xima" : "Ver Resultado"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* FINAL */}
        {fase === "final" && (
          <div className="video-modal-screen final">
            <span className="video-modal-badge">Desafio conclu&iacute;do</span>
            <h2>Parab&eacute;ns!</h2>
            <p className="video-modal-text">
              Voc&ecirc; acertou <strong>{pontuacao}</strong> de <strong>{perguntas.length}</strong> nomes.
            </p>
            <div className="video-modal-actions">
              <button className="video-modal-secondary" onClick={onClose}>
                Fechar
              </button>
              <button
                className="video-modal-primary"
                onClick={reiniciarJogo}
              >
                Jogar novamente
              </button>
            </div>
          </div>
        )}
        
        <audio ref={somAcertoRef} src="/sons/certo.mp3" preload="auto" />
        <audio ref={somErroRef} src="/sons/erro.mp3" preload="auto" />
      </div>
    </div>
  );
}