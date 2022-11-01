const cart = [];
console.log("cart", cart);

const handleCart = (state = cart, action) => {
  const product = action.payload;
  console.log("product", product);
  switch (action.type) {
    case "ADDITEM":
      //check if product alreadly Exit
      const exist = state.find((x) => x.id === product.id);
      console.log("exist", exist);
      console.log("state", state);
      if (exist) {
        //increse the quality
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};
export default handleCart;
