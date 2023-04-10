import React, {useContext} from 'react';
import {Box, Typography} from "@mui/material";
import {ScrollMenu,VisibilityContext} from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({data , bodyPart, setBodyPart }) => {

    return (
        <ScrollMenu>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 15px"
                >
                    <BodyPart
                        item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
                )
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;