export const currentLoactionReducer = (state = '/', action) => {
  switch (action.type) {
    case 'CURRENT_LOCATION_SUCCESS':
      return action.location;
    default:
      return state;
  }
};


export const toggleSlideMenuReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SLIDE':
      return action.value;
    default:
      return state;
  }
};

