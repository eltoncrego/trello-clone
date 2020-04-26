import React from 'react';

const UserContext = React.createContext({});

export const userObject = {
  user: null,
  set currentUser(user) {
   this.user = user; 
  }
}

export const UserProvider = UserContext.Provider;
export default UserContext;