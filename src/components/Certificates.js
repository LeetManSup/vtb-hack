// src/components/Certificates.js
import React from 'react';
import { Container, List, ListItem, ListItemText, Button, Box, Typography } from '@mui/material';

const Certificates = ({ certificates }) => {
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
                    Ваши Сертификаты
                </Typography>
                <List>
                    {certificates.map((cert) => (
                        <ListItem key={cert.id}>
                            <ListItemText primary={cert.name} secondary={`Дата: ${cert.date}`} />
                        </ListItem>
                    ))}
                </List>
                <Button variant="contained" color="primary" href="/request-certificate" sx={{ marginTop: 2 }}>
                    Запросить сертификат
                </Button>
            </Box>
        </Container>
    );
};

export default Certificates;
