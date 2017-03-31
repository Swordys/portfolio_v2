export const toggleSlideMenuReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SLIDE':
      return action.value;
    default:
      return state;
  }
};

