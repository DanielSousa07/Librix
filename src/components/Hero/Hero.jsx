import styles from './Hero.module.css';
import hero from '../../assets/hero.png';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p>Seja bem-vindo ao <span>Librix</span></p>

        <h2>Aproximação de Ouvintes à Libras</h2>

        <p className={styles.desc}>
          Nosso objetivo é tornar o aprendizado da Língua Brasileira de Sinais acessível,
          dinâmico e interativo. Você vai encontrar vídeos feitos pelos próprios alunos,
          além de jogos educativos que tornam o processo divertido e envolvente.
        </p>

        <button className={styles.cta}>Comece a Aprender</button>
      </div>

      <img src={hero} className={styles.image} />
    </section>
  );
}
