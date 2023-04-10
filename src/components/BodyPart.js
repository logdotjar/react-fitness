import React from 'react';
import {Stack, Typography} from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPartCard"
            sx={
                bodyPart === item ? {
                    borderTop: '4px solid #FF2625',
                    backgroundColor:'rgba(255, 38, 37,0.12)'
                } : {
                    backgroundColor:'#ffffff'
                }
            }
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
            }}
        >
            <img src={Icon}
                 alt="dumbbell"
                 style={{width: '40px', height: '40px'}}
            />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                fontFamily="NanumSquare"
                color="#3A1212"
                textTransform="capitalize"
            >
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;