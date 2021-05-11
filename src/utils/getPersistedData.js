const getPersistedState = name =>
  localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : {};

export default getPersistedState;
