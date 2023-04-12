import React from 'react';
import {Typography, Stack, Button} from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import {ExerciseDetailImage} from "./StyleComponents";

const Detail = ({exerciseDetail}) => {
    // 구조분해할당

    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: {lg: 'row'},
                p: '20px',
                alignItems: 'center'
            }}
        >
            <ExerciseDetailImage>
                <img
                    src={gifUrl}
                    loading="lazy"
                    style={{width: "100%"}}
                    alt="exercise detail image"
                />
            </ExerciseDetailImage>
            <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
                <Typography
                    sx={{fontSize: {lg: '64px', xs: '30px'}}}
                    fontWeight={700}
                    lineHeight="1"
                    textTransform="capitalize"
                >
                    {name}
                </Typography>
                <Typography
                    sx={{fontSize: {lg: '22px', xs: '18px'}}}
                    color="#4F4C4C"
                >
                    운동은 여러분들을 건강하게 만들어줍니다.{' '}<br/>
                    <span style={{textTransform: 'capitalize'}}>
                        {name}
                    </span>
                    exercises to target your {target}.<br/>
                    It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button
                            sx={{
                                width: '100px',
                                height: '100px',
                                background: '#FFF2DB',
                                borderRadius: '50%'
                            }}>
                            <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}}/>
                        </Button>
                        <Typography
                            textTransform="capitalize"
                            sx={{fontSize: {lg: '21px', xs: '17px'}}}
                            fontWeight="600"
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;