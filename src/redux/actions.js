// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_5 = "INCREMENT_5"

// Action Creators
export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const increment_5 = () => {
  return {
    type: INCREMENT_5
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
