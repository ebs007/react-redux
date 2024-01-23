import styles from "/src/components/Busca/Busca.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { mudarBusca, resetarBusca } from "/src/store/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { memoize } from "proxy-memoize";

export default function Busca() {
  const dispatch = useDispatch();
  const location = useLocation();

  const selectBusca = memoize((state) => state.busca);

  const busca = useSelector(selectBusca);

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder="O que você procura?"
        value={busca}
        onChange={(evento) => dispatch(mudarBusca(evento.target.value))}
      />
    </div>
  );
}
