import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { ethers } from "ethers";
import metamaskIcon from './icons/64px-MetaMask_Fox.svg.png';
import tonIcon from './icons/toncoin-ton-logo.svg';


const Auth = ({ onLogin }) => {
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    // const connectWallet = async () => {
    //     if (window.ethereum) {
    //         try {
    //             const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    //             const account = window.utils.getAddress(accounts[0]);
    //             setWalletAddress(account);
    //             onLogin();
    //         } catch (error) {
    //             console.error("Ошибка при подключении к Metamask", error);
    //         }
    //     } else {
    //         alert("Metamask не установлен. Пожалуйста, установите Metamask для продолжения.");
    //     }
    // };

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: 'eth_accounts' })
                .then((account) => {
                    console.log(account);
                })
        } else {
            alert("Metamask не установлен. Пожалуйста, установите Metamask для продолжения.")
        }
    }


    const handleSubmit = () => {
        // Логика авторизации
        onLogin();
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    marginTop: 8,
                }}
            >
                <Typography variant="h4" color="primary" align="center" gutterBottom>
                    Вход в систему
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={connectWallet}
                    sx={{marginTop: 2}}
                >
                    <img src={metamaskIcon} alt=" " style={{width: 24, height: 24, marginRight: 8}}/>
                    Войти с Metamask
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                    sx={{marginTop: 2}}
                >
                    <img src={tonIcon} alt=" " style={{width: 24, height: 24, marginRight: 8}}/>
                    Войти с TON
                </Button>

                {walletAddress && (
                    <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                        Подключен адрес: {walletAddress}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Auth;
