import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const Navbar = () => {
  const { currentUser, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-700 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          NGR Prediction
        </Link>
        <div className="space-x-4 text-sm">
          <Link to="/free-predictions" className="hover:underline">Free</Link>
          <Link to="/premium-predictions" className="hover:underline">Premium</Link>
          {isAdmin && <Link to="/admin" className="hover:underline">Admin</Link>}
          {currentUser ? (
            <>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <button onClick={handleLogout} className="hover:underline ml-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
