import Header from "/src/components/Header";
import Item from "../../components/Item";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useParams } from "react-router-dom";
import styles from "./Categoria.module.scss";

export default function Categoria() {
  const { nomeCategoria } = useParams();

  const categoriasSelect = (state) => state.categorias;
  const itensSelect = (state) => state.itens;

  const dados = createSelector(
    [categoriasSelect, itensSelect],
    (select1, select2) => ({
      categoria: select1.find((categoria) => categoria.id === nomeCategoria),
      itens: select2.filter((item) => item.categoria === nomeCategoria),
    }),
  );

  const { categoria, itens } = useSelector(dados);

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
