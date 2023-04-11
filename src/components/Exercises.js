import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";
import {Box, Stack, Typography} from "@mui/material";

import {exerciseOptions, fetchData} from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";


// home.js <Exercises> props
const Exercises = ({exercises, setExercises, bodyPart}) => {

    return (
        <Box id="exercises"
             mt="50px"
             p="20px"
             sx={{mt: {lg: '109px'}}}
        >
            <Typography
                variant="h3"
                mb="46px"
                fontFamily="NanumSquare"
                fontWeight="bold"
                sx={{fontSize: {lg: '44px', xs: '30px'}}}
            >
                검색 결과
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{gap: {lg: '107px', xs: '50px'}}}
            >
                {exercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    );
};

export default Exercises;