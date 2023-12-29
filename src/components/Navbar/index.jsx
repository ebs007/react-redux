import styles from "/src/components/Navbar/Navbar.module.scss";
import Logo from "/src/assets/logo.svg?react";
import classNames from "classnames";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <a
          href="/"
          className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === "/",
          })}
        >
          Página inicial
        </a>
      </div>
    </nav>
  );
}
