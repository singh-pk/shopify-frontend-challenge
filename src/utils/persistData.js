const persistData = (name, data) => {
  if (typeof window !== undefined) {
    localStorage.setItem(`${name}`, JSON.stringify(data));
  }
};

export default persistData;
