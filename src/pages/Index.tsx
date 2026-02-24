import React from 'react';
import { useAuth } from '@/contexts/auth';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import logoImg from '@/assets/logoh.png';

const Index: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <img src={logoImg} alt="Lognet SVA" className="h-16 w-auto mx-auto mb-4" />
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
