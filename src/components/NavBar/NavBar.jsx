import styles from "./NavBar.module.css";
import logo from "../../assets/logo.svg";


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoArea}>
        <img src={logo} alt="IBRIX" className={styles.img} />
        <h1>IBRIX</h1>
      </div>

      <ul className={styles.menu}>
        <li>Home</li>
        <li>Alfabeto em Libras</li>
        <li>Jogos</li>
        <li>Sobre Libras</li>
      </ul>

      <button className={styles.button}>Contato</button>
    </nav>
  );
}
