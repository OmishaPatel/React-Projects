export const deposit = (amount) => {
  return { type: "DEPOSIT", payload: parseInt(amount) };
};
export const withdraw = (amount) => {
  return { type: "WITHDRAW", payload: parseInt(amount) };
};
export const collectInterest = () => {
  return { type: "COLLECT_INTEREST" };
};
export const deleteAccount = () => {
  return { type: "DELETE_ACCOUNT" };
};
export const toggleAccount = () => {
  return { type: "TOGGLE_ACCOUNT" };
};

export const toggleAuth = () => {
  return { type: "TOGGLE_AUTH" };
};
