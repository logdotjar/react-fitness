import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Loader from './Loader';

import {ExerciseVideo} from "../components/StyleComponents";

const ExerciseVideos = ({exerciseVideos, name}) => {
    if (!exerciseVideos.length) return <Loader />;


    return (
        <Box sx={{marginTop: {lg: '203px', xs: '20px'}}} p="20px">
            <Typography
                mb="33px"
                sx={{fontSize: {lg: '44px', xs: '25px'}}}
                fontWeight={700} color="#000"
            >
                Watch
                <span
                    style={{
                        color: '#FF2625',
                        textTransform: 'capitalize'
                    }}
                >{' '}{name}{' '}
                </span>
                exercise videos
            </Typography>
            <Stack
                justifyContent="center"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection:'row',
                    gap: {lg: '90px', xs: '30px'}
                }}
            >
                {exerciseVideos && exerciseVideos.slice(0, 3).map((item, index) => (
                    <ExerciseVideo>
                        <a
                            key={index}
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={item.video.thumbnails[0].url}
                                style={{width:"100%",borderTopLeftRadius: '20px'}}
                                alt={item.video.title}
                            />
                            <Box>
                                <Typography
                                    sx={{fontSize: {lg: '25px', xs: '18px'}}}
                                    fontWeight={600}
                                    color="#000"
                                >
                                    {item.video.title}
                                </Typography>
                                <Typography
                                    marginTop="5px"
                                    fontSize="14px"
                                    color="#000"
                                >
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    </ExerciseVideo>

                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;