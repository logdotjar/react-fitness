import React, { useState } from 'react';
import { Box } from "@mui/material";
import VisualBanner from "../components/VisualBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from"../components/Exercises";
const Home = () => {
    return (
        <Box>
            <VisualBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    );
}

export default Home;