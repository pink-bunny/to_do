export const objToArray = (data) => {
  const result = [];
  for (let prop in data) {
    result.push(data[prop]);
  }

  return result;
};
