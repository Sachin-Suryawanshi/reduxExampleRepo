export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const isLoggedCheck = () => {
  return {
    type: "SIGN_IN"
  };
};
