# Generate a full working firebase/AuthContext.js file for authentication context

auth_context_code = """
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './config';
import { onAuthStateChanged } from 'firebase/auth';

// Create the Auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      // Simple admin check — replace this with real logic
      if (user && user.email === 'admin@ngrprediction.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
"""

# Create and save the file
auth_context_path = "/mnt/data/NGR_Prediction_Final_Project/src/firebase/AuthContext.js"
os.makedirs(os.path.dirname(auth_context_path), exist_ok=True)
with open(auth_context_path, "w") as f:
    f.write(auth_context_code)

auth_context_path
