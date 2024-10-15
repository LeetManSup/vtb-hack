// src/components/Recommendations.js
import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const Recommendations = () => {
    const [colleague, setColleague] = useState('');
    const [skill, setSkill] = useState('');

    const handleRequest = () => {
        // Логика отправки запроса
        console.log('Запрос на рекомендацию отправлен');
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
                    Запросить рекомендацию
                </Typography>
                <TextField
                    label="Коллега"
                    fullWidth
                    margin="normal"
                    value={colleague}
                    onChange={(e) => setColleague(e.target.value)}
                />
                <TextField
                    label="Навык/Проект"
                    fullWidth
                    margin="normal"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleRequest} sx={{ marginTop: 2 }}>
                    Запросить рекомендацию
                </Button>
            </Box>
        </Container>
    );
};

export default Recommendations;
