import React from 'react';
import {Link} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";

import {ResultExerciseCard} from "./StyleComponents";

const ExerciseCard = ({ exercise }) => (
    <Link to={`/exercise/${exercise.id}`}>
        <ResultExerciseCard>
            <img
                src={exercise.gifUrl}
                loading="lazy"
                alt={exercise.name}
            />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#FFA9A9',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#fcc757',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"
                mt="11px"
                pb="10px"
                color="#000"
                fontFamily="NanumSquare"
                fontWeight="bold"
                textTransform="capitalize"
                sx={{fontSize: {lg: '24px', xs: '20px'}}}
            >
                {exercise.name}
            </Typography>
        </ResultExerciseCard>
    </Link>
);

export default ExerciseCard;