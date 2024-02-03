import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {user , logout} = useUserAuth();
    console.log(user);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logout();
            navigate('/login');
        }catch(err)
        {
            console.log(err.name);
        }
    }
  return (
    <div>
      <div><img src={user.photoURL}/> Hello , welcome <br/> {user && user.displayName} {user && user.email}</div>
      <button onClick={() => {handleLogout()}}>Logout</button>
    </div>
  )
}

export default Home
