import React, { useState, useEffect } from 'react'
import useAuthStore from '../../store/AuthStore'
import Login from '../../auth/Login'
import {Navbar, Footer} from '../../components/index.js'

function RequestorDashboard() {

  const {user, setUser, isAuthenticated} = useAuthStore();
  const [Loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/auto-login', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        setUser(null);
        setLoading(false);
        return;
      }
      const data = await response.json();
      setUser(data);
      setLoading(false);
      
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  

  if (Loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
        <Navbar />
        <div>
          requestor dashboard {user.user.username}
        </div>
        <Footer />
        </div>
      ) : (
        <Login/>
      )}
    </div>
  )
}

export default RequestorDashboard
