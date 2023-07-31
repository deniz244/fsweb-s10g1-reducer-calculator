export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const EKRANA_YAZ = "EKRANA_YAZ";

export const MEMORY_SUM = "MEMORY_SUM";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperator = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const concatNumber = (number) => {
  return { type: EKRANA_YAZ, payload: number.toString() };
};
