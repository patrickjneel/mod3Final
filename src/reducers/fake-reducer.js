export const addHousesReducer = (state= [], action) => {
  switch (action.type) {
    case 'ADD_HOUSES':
    return [...state, ...action.data]
  default:
    return state;
  }
};
