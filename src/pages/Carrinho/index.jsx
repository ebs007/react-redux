import Header from "/src/components/Header";
import styles from "./Carrinho.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { resetarCarrinho } from "/src/store/reducers/carrinho";
import Item from "/src/components/Item";

export default function Carrinho() {
  const dispatch = useDispatch();

  const carrinhoSelect = (state) => state.carrinho;
  const itensSelect = (state) => state.itens;

  const dados = createSelector(
    [carrinhoSelect, itensSelect],
    (select1, select2) => {
      let total = 0;
      const carrinhoReduce = select1.reduce((itens, itemNoCarrinho) => {
        const item = select2.find((item) => item.id === itemNoCarrinho.id);
        total += item.preco * itemNoCarrinho.quantidade;
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
        return itens;
      }, []);
      return { carrinho: carrinhoReduce, total };
    },
  );

  const { carrinho, total } = useSelector(dados);

  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
