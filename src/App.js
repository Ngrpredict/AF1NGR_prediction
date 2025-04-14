import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './firebase/AuthContext';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FreePredictions from './components/FreePredictions';
import PremiumPredictions from './components/PremiumPredictions';
import AdminDashboard from './components/AdminDashboard';
import PaymentPage from './components/PaymentPage';
import Contact from './components/Contact';
import CryptoSection from './components/CryptoSection';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PredictionForm from './components/PredictionForm';
import PredictionList from './components/PredictionList';
import PricingPage from './components/PricingPage';
import UserDashboard from './components/UserDashboard';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { currentUser, isAdmin } = useAuth();
  return currentUser && isAdmin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/free-predictions" element={<FreePredictions />} />
              <Route
                path="/premium-predictions"
                element={
                  <PrivateRoute>
                    <PremiumPredictions />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="/payment"
                element={
                  <PrivateRoute>
                    <PaymentPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/crypto"
                element={
                  <PrivateRoute>
                    <CryptoSection />
                  </PrivateRoute>
                }
              />
              <Route
                path="/predictions"
                element={
                  <PrivateRoute>
                    <PredictionList type="premium" />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-prediction"
                element={
                  <AdminRoute>
                    <PredictionForm />
                  </AdminRoute>
                }
              />
              <Route path="/pricing" element={<PricingPage />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
