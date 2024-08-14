import React, { useState, useEffect } from 'react'
import useAuthStore from '../../store/AuthStore'
import Login from '../../auth/Login'
import { Navbar, Footer, Sidebar } from '../../components/index.js'

function RequestorDashboard() {

  const { user, setUser, isAuthenticated } = useAuthStore();
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
        <div className="h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 flex bg-[#121c24] text-white border-y-2">
            <Sidebar />
            <div className="flex-1">
              requestor dashboard {user.user.username}
            </div>
          </div>
        </div>

      ) : (
        <Login />
      )}
    </div>
  )
}

export default RequestorDashboard
