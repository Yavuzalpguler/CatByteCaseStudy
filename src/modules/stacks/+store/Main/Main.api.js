function getUserInfo() {
  return fetch('https://dummyjson.com/users', {
    method: 'GET',
    headers: {
      // Authorization: 'Bearer ' + secretKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson;
    });
}

export const mainServices = {
  getUserInfo,
};
