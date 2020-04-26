const users = [];

const addUser = ({ email, password }) => {
  const existingUser = users.find((user) => {
    return user.email === email;
  });
  if (existingUser) {
    return ({ 
      error: {
        code: 0,
        text: `A user already exists with this email address.`,
      }
    });
  }

  const user = { email, password };
  users.push(user)
  return { user };
}

const verifyUser = ({ email, password }) => {
  const user = users.find((user) => {
    return user.email === email;
  });
  if (!user) {
    return addUser({ email, password });
  }
  if (user.password === password) {
    return { user };
  }
  return ({
    error: {
      code: 1,
      text: `The password or email address is invalid.`,
    }
  });
}

module.exports = {
  addUser,
  verifyUser
};