import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Logo from "../assets/images/logo2.png";

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack
            sx={{alignItems: "center"}}
            gap="40px"
            flexWrap="wrap"
            px="40px" pt="24px"
        >
            <img src={Logo} alt="logo" style={{width: "200px", height: "41px"}}/>
        </Stack>
        <Typography
            mt="30px"
            pb="40px"
            variant="h5"
            sx={{fontSize: "20px"}}
            textAlign="center"
        >❤️Made By log.jar</Typography>
    </Box>
);

export default Footer;