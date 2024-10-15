// src/components/RequestCertificate.js
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const RequestCertificate = () => {
    const [certificateType, setCertificateType] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        // Логика отправки запроса
        console.log('Запрос отправлен');
    };

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
                <Typography variant="h5" color="primary" gutterBottom>
                    Запрос нового сертификата
                </Typography>
                <TextField
                    label="Тип сертификата"
                    fullWidth
                    margin="normal"
                    value={certificateType}
                    onChange={(e) => setCertificateType(e.target.value)}
                />
                <TextField
                    label="Описание достижения"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>
                    Отправить запрос
                </Button>
            </Box>
        </Container>
    );
};

export default RequestCertificate;
