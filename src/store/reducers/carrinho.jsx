import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item) => item.id === payload);
      if (!temItem)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];
      return state.filter((item) => item.id !== payload);
    },
    mudarQuantidade: (state, action) => {
      console.log(action);
      state = state.map((itemNoCarrinho) => {
        console.log(itemNoCarrinho.id);
        if (itemNoCarrinho.id === action.payload.id)
          itemNoCarrinho.quantidade += action.payload.quantidade;
        return itemNoCarrinho;
      });
    },
  },
});

export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
