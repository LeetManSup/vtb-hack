// src/components/Profile.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Profile = ({ profileData, walletAddress }) => {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    marginTop: 4,
                }}
            >
                <Typography variant="h4" color="primary" gutterBottom>
                    {profileData.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {profileData.position}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Навыки: {profileData.skills.join(', ')}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Сертификаты: {profileData.certificates.length}
                </Typography>

                <Button variant="contained" color="primary" href="/certificates" sx={{ marginTop: 2 }}>
                    Управление сертификатами
                </Button>
                <Button variant="contained" color="secondary" href="/recommendations" sx={{ marginLeft: 2, marginTop: 2 }}>
                    Рекомендации
                </Button>

                {walletAddress && (
                    <Typography variant="body2" color="secondary" sx={{ marginTop: 2 }}>
                        Подключен MetaMask адрес: {walletAddress}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Profile;
