export const addHousesReducer = (state= [], action) => {
  switch (action.type) {
    case 'ADD_HOUSES':
    return [...state, ...action.data] //not sure if need to spread the action ??
  default:
    return state;
  }
};
