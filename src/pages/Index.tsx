import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Index: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <span className="gradient-text text-3xl font-extrabold">Lognet SVA</span>
          <div className="mt-4">
            <FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-primary" />
          </div>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <Landing />;
};

export default Index;
