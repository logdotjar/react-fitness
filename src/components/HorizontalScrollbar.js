import React,{useContext} from 'react';
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {Box, Typography} from "@mui/material";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import {SliderLeftArrow, SliderRightArrow} from "./StyleComponents";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <SliderLeftArrow onClick={() => scrollPrev()} >
            <img src={LeftArrowIcon} alt="left arrow" />
        </SliderLeftArrow>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <SliderRightArrow onClick={() => scrollNext()}>
            <img src={RightArrowIcon} alt="right arrow" />
        </SliderRightArrow>
    );
};


const HorizontalScrollbar = ({data, bodyParts, setBodyPart, bodyPart}) => {

    return (
        <ScrollMenu >
            {data.map((item) => (
                    <Box
                        key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}
                        m="0 15px"
                    >
                        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/> :
                            <ExerciseCard exercise={item}/>}
                    </Box>
                )
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;