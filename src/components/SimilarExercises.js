import React from 'react';
import {Typography, Box, Stack} from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => (
    <Box sx={{mt: {lg: '100px', xs: '0px'}}}>
        <Typography
            mb="33px"
            sx={{fontSize: {lg: '38px', xs: '22px'}, ml: '20px'}}
            fontWeight={700}
            color="#000"
        >
            Similar
            <span style={{color: '#FF2625', textTransform: 'capitalize'}}>
                {' '}Target Muscle{' '}
            </span>
            exercises
        </Typography>
        <Stack
            direction="row"
            sx={{p: 2, position: 'relative'}}
        >
            {targetMuscleExercises.length !== 0 ?
                <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
        </Stack>
        <Typography
            mb="33px"
            sx={{
                ml: '20px',
                mt: {lg: '100px', xs: '60px'},
                fontSize: {lg: '38px', xs: '22px'}
            }}

            fontWeight={700}
            color="#000"
        >
            Similar
            <span style={{color: '#FF2625', textTransform: 'capitalize'}}>
                {' '}Equipment{' '}
            </span>
            exercises
        </Typography>
        <Stack direction="row" sx={{p: 2, position: 'relative'}}>
            {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
        </Stack>
    </Box>
);

export default SimilarExercises;