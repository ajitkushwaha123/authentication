import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    var {user} = useUserAuth(); // Replace this with actual authentication logic

    if(!user) {
        navigate('/login');
        return null; // Don't render anything if not authenticated
    }

    return (
        <div>
            {children} 
        </div>
    );
}

export default ProtectedRoute;
