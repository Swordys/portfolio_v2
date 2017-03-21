export const currentLocationState = (location) => ({
  type: 'CURRENT_LOCATION_SUCCESS',
  location,
});


export const toggleSlideMenu = (value) => ({
  type: 'TOGGLE_SLIDE',
  value
});

