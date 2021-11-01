export const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'errors/added':
      return [...state, action.payload]
    default:
      return state
  }
};
