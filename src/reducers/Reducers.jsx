export const currentLoactionReducer = (state = '', action) => {
  switch (action.type) {
    case 'CURRENT_LOCATION_SUCCESS':
      return action.location;
    default:
      return state;
  }
};


export const aboutReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ABOUT':
      return action.value;
    default:
      return state;
  }
};


export const projectReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PROJECT':
      return action.value;
    default:
      return state;
  }
};


export const skillsReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SKILLS':
      return action.value;
    default:
      return state;
  }
};


export const contactReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_CONTACT':
      return action.value;
    default:
      return state;
  }
};



