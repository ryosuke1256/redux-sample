const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT10':
      return state + 10;
    case 'INCREMENT1':
      return state + 1;
    case 'DECREMENT1':
      return state - 1;
    case 'DECREMENT10':
      return state - 10;
    default:
      return state;
  }
};

export default counterReducer;
