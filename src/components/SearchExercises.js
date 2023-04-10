import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {exerciseOptions, fetchData} from "../utils/fetchData";
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    // 입력값 무조건 소문자로 반환
    const [search, setSearch] = useState('');
    const [bodyParts,setBodyParts] = useState([]);

    useEffect(()=>{
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

            setBodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData();
    },[]);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );
            window.scrollTo({top: 1800, left: 100, behavior: "smooth"});
            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            mt="37px"
            p="20px"
        >
            <Typography
                sx={{fontSize: {lg: '44px', xs: '30px'}}}
                mb="49px"
                textAlign="center"
                fontWeight={700}
            >
                당신이 알아두면 좋은<br/>효과적인 운동 꿀팁
            </Typography>
            <Box position="relative" width="100%" mb="72px" align="center">
                <TextField
                    type="text"
                    placeholder="Search Exercises"
                    height="76px"
                    sx={{
                        input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
                        width: {
                            lg: 'calc(60% - 173px)',
                            md: '350px',
                            xs: 'calc(100% - 80px)'

                        },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase())
                    }}
                />
                <Button
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: {lg: '173px', xs: '80px'},
                        height: '56px',
                        // position: 'absolute',
                        // right: '0',
                        fontSize: {lg: '20px', xs: '14px'}
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyParts
                    setBodyPart={setBodyPart}
                    bodyPart={bodyPart}
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;