import React from 'react';
import {Box, Stack, Typography, Button} from "@mui/material";
import {VisualBannerTag} from "../components/StyleComponents";
import VisualBannerImage from "../assets/images/banner.png";

const VisualBanner = () => {
    return (
        <Box
            sx={{
                mt: {lg: '212px', xs: '70px'},
                ml: {sm: '50px'}
            }}
            position="relative"
            p="20px"
        >
            <Typography
                color="#ff2625"
                fontWeight="600"
                fontSize="24px"
            >Fitness Club
            </Typography>
            <Typography
                fontWeight="700"
                sx={{fontSize: {lg: '44px', xs: '40px'}}}
                mb="23px" mt="30px"
                lineHeight="1.3"
            >
                노력, 땀<br/>
                그리고 반복
            </Typography>
            <Typography
                mb={4}
                fontSize="20px"
                fontFamily="NanumSquare"
                lineHeight="1.5"
            >
                효과적인 운동방법을 확인해보세요!
            </Typography>
            <Button
                variant="contained"
                color="error"
                href="#excercises"
                sx={{ backgroundColor:"#ff2625",
                padding:"10px 14px"}}
            >Explore Exercises</Button>
            <Typography
                fontWeight={700}
                color="#FF2625"
                sx={{
                    mt: {lg: '100px', sm: '40px'},
                    opacity: '0.1',
                    display: {lg: 'block', xs: 'none'},
                    fontSize: '200px'
                }}
                fontFamily="NanumSquare"
                mb="23px"
            >
                Exercise
            </Typography>
            <VisualBannerTag>
                <img src={VisualBannerImage} alt="메인 비주얼 이미지"/>
            </VisualBannerTag>
        </Box>
    );
};

export default VisualBanner;