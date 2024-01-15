import Header from "/src/components/Header";
import styles from "./Carrinho.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import carrinho from "/src/store/reducers/carrinho";
import Item from "/src/components/Item";

export default function Carrinho() {
  const carrinhoSelect = (state) => state.carrinho;
  const itensSelect = (state) => state.itens;

  const dados = createSelector(
    [carrinhoSelect, itensSelect],
    (select1, select2) => {
      let total = 0;
      const carrinhoReduce = select1.reduce((itens, itemNoCarrinho) => {
        const item = select2.find((item) => item.id === itemNoCarrinho.id);
        total += item.preco * itemNoCarrinho.quantidade;
        console.log(itens);
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
        {/* {console.log(carrinhoReduce)} */}
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            {console.log(carrinho)}
            Subtotal: <strong> R$ {total.toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
