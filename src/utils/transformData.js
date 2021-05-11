const transformData = responseData =>
  responseData.reduce((accumulator, response) => {
    accumulator[response.imdbID] = response;
    return accumulator;
  }, {});

export default transformData;
