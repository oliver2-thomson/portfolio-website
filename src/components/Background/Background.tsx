import {Box} from "@chakra-ui/react";

const Background = () => {
    return (
        <Box // for the background
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            zIndex="-1" // put it behind
            backgroundColor="gold"
        />
    );
};

export default Background;