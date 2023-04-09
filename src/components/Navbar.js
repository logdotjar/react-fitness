import React from 'react';
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../assets/images/logo.png";


//로고만을 위한 Link 컴포넌트 커스터마이징
const LogoLink = styled(Link)(() => ({
    width:48,
    height:48,
    marginRight:20,
    marginLeft:20
}));

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap:{ sm: '122px', xs:'40px'},
                mt: {sm:"32px" , xs:"20px"},
                justifyContent:"none"
            }}
            px="20px"
        >
            <LogoLink to="/">
                <img
                    src={Logo}
                    alt="Logo"
                />
            </LogoLink>
            <Stack
                direction="row"
                gap="40px"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link to="/"
                    style = {{
                        color:"#3A1212",
                        borderBottom:"3px solid #ff2625"
                    }}
                >Home</Link>
                <a href="#exercises"
                   style={{color : "#3A1212"}}
                >
                    Excercises
                </a>
            </Stack>
        </Stack>
    );
};

export default Navbar;