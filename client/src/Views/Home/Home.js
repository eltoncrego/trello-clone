import React, { useContext } from 'react';
import UserContext from '../../Shared/Utils/UserContext';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const userObject = useContext(UserContext);
  if (!userObject.user) {
    return <Redirect to='/login'/>
  } 
  return <h1>{userObject.user.email}</h1>;
}

export default Home;