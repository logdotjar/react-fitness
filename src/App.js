import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// excercise/:id => 다이나믹한 렌더링 페이지이동을 위해

const App = () => {
  return (
    <Box width="400px" sx={{ width : { xl : '1400px'}}} m="auto">
      <Navbar />
        <Router>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/exercise/:id" element={<ExerciseDetail />}/>
            </Routes>
        </Router>
    </Box>
  )
}

export default App