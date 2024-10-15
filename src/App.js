// src/App.js
import React, { useState } from 'react';
import { Container, Button, Box } from '@mui/material';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Certificates from './components/Certificates';
import RequestCertificate from './components/RequestCertificate';
import Recommendations from './components/Recommendations';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile');
  const [walletAddress, setWalletAddress] = useState('');

  const profileData = {
    name: 'Иван Иванов',
    position: 'Software Engineer',
    skills: ['JavaScript', 'React', 'Node.js'],
    certificates: [{ id: 1, name: 'React Certificate', date: '2024-10-01' }],
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile profileData={profileData} walletAddress={walletAddress} />;
      case 'certificates':
        return <Certificates certificates={profileData.certificates} />;
      case 'request-certificate':
        return <RequestCertificate />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return <Profile profileData={profileData} walletAddress={walletAddress} />;
    }
  };

  return (
      <Container>
        {!isAuthenticated ? (
            <Auth onLogin={handleLogin} />
        ) : (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 2 }}>
                <Button color="primary" onClick={() => setCurrentPage('profile')}>Профиль</Button>
                <Button color="primary" onClick={() => setCurrentPage('certificates')}>Сертификаты</Button>
                <Button color="primary" onClick={() => setCurrentPage('request-certificate')}>Запрос сертификата</Button>
                <Button color="primary" onClick={() => setCurrentPage('recommendations')}>Рекомендации</Button>
              </Box>
              {renderPage()}
            </>
        )}
      </Container>
  );
};

export default App;
