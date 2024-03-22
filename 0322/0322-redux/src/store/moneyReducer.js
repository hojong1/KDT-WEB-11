export const PLUS = "PLUS";
export const MINUS = "MINUS";

export const plusMoney = (value) => {
  return {
    type: PLUS,
    value,
  };
};

export const minusMoney = (value) => {
  return {
    type: MINUS,
    value,
  };
};

const firstPrice = { price: 0 };

const moneyReducer = (state = firstPrice, action) => {
  switch (action.type) {
    case PLUS:
      return { price: state.price + action.value };
    case MINUS:
      return { price: state.price - action.value };
    default:
      return state;
  }
};

export default moneyReducer;
