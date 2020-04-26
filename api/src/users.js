const users = [];

const addUser = ({ email, password }) => {
  const existingUser = users.find((user) => {
    return user.email === email;
  });
  if (existingUser) {
    return ({ 
      error: {
        code: 0,
        text: `A user already exists with the email, ${email}.`,
      }
    });
  }

  const user = { email, password };
  users.push(user)
  return { user };
}

module.exports = {
  addUser
};