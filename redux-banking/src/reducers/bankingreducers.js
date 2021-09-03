const initialState = {
  balance: 0,
  isSavingsAccount: false,
};
export const bankingreducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.payload };
    case "WITHDRAW":
      return { ...state, balance: state.balance - action.payload };
    case "COLLECT_INTEREST":
      return { ...state, balance: state.balance * 1.09 };
    case "DELETE_ACCOUNT":
      return { ...state, balance: 0 };
    case "TOGGLE_ACCOUNT":
      return { ...state, isSavingsAccount: !state.isSavingsAccount };
    default:
      return state;
  }
};
