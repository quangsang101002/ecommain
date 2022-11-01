//for additem to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//del additem to cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
