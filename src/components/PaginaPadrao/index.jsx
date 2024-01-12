import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import styles from "/src/components/PaginaPadrao/PaginaPadrao.module.scss";
import Footer from "../Footer";

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
