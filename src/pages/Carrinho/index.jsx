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
    (select1, select2) => ({
      carrinhoReduce: select1.reduce((itens, itemNoCarrinho) => {
        const item = select2.find((item) => item.id === itemNoCarrinho.id);
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
        return itens;
      }, []),
    }),
  );

  const { carrinhoReduce } = useSelector(dados);

  //   const carrinho = useSelector((state) => {
  //     const carrinhoReduce = select1.reduce((itens, itemNoCarrinho) => {
  //       const item = select2.find((item) => item.id === itemNoCarrinho.id);
  //       itens.push({
  //         ...item,
  //         quantidade: itemNoCarrinho.quantidade,
  //       });
  //       return itens;
  //     }, []);
  //     return carrinhoReduce;
  //   } );

  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />
      <div className={styles.carrinho}>
        {carrinhoReduce.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {(0.0).toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
