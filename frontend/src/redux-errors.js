export const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'errors/added':
      return [...state, action.payload]
    case 'errors/dismissed-first':
      return state.slice(1)
    default:
      return state
  }
};
