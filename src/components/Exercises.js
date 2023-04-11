import React, {useEffect, useState} from 'react';
import {Pagination} from "@mui/material";
import {Box, Stack, Typography} from "@mui/material";

import {exerciseOptions, fetchData} from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";


// home.js <Exercises> props
const Exercises = ({exercises, setExercises, bodyPart}) => {

    const [currentPage,setCurrentPage] = useState(1);
    const exercisesPerPages = 9;


    const indexOfLastExercise = currentPage * exercisesPerPages;
    const indexOffFirstExercise = indexOfLastExercise - exercisesPerPages;
    const currentExercises = exercises.slice(indexOffFirstExercise,indexOfLastExercise);

    const paginate = (e,value) => {
        setCurrentPage(value);
        window.scrollTo({top:1800,behavior : "smooth"})
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);


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
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </Stack>
            <Stack
                mt="100px"
                alignItems="center"
                sx={{ mt: { lg: '114px', xs: '70px' } }}
            >
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPages)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />

                )}

            </Stack>
        </Box>
    );
};

export default Exercises;