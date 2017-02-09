export const currentLocationState = (location) => ({
  type: 'CURRENT_LOCATION_SUCCESS',
  location,
});

export const toggleAbout = (value) => ({
  type: 'TOGGLE_ABOUT',
  value
});


export const toggleProject = (value) => ({
  type: 'TOGGLE_PROJECT',
  value
});


export const toggleSkills = (value) => ({
  type: 'TOGGLE_SKILLS',
  value
});


export const toggleContact = (value) => ({
  type: 'TOGGLE_CONTACT',
  value
});
