function getBasePostRequest(payload) {
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: payload,
  };
}

function responseProvider(response) {
  return response.json();
}

/*
 *  postNewUser():
 *  - param: user => { email: <string>, password: <string> }
 *  - returns: data with the following situational keys
 *    - onSuccess: user => { email: <string>, password: <string> }
 *    - onFailure: error => some kind of error text
 */
export const postNewUser = (user) => {
  const payload = JSON.stringify(user, null, 2);
  return fetch('/newuser', getBasePostRequest(payload))
    .then(responseProvider);
};

/*
 *  postVerifyUser():
 *  - param: user => { email: <string>, password: <string> }
 *  - returns: data with the following situational keys
 *    - onSuccess: user => { email: <string>, password: <string> }
 *    - onFailure: error => some kind of error text
 *  - Defaults to newUser in back-end if user doesn't exist
 */
export const postVerifyUser = (user) => {
  const payload = JSON.stringify(user, null, 2);
  return fetch('/verifyuser', getBasePostRequest(payload))
    .then(responseProvider);
};