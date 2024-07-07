import {Heading, Image, Stack} from "@chakra-ui/react";
import headshot from '../../assets/about-me-anonymous.svg';

const AboutMe = () => {
    return (
        <>
            <Stack align="center">
                <Heading>About me</Heading>
                <Image src={headshot} boxSize={200} borderRadius={100}/>
                <Heading>Oliver Thomson</Heading>
                <Heading>Gameplay programmer</Heading>
            </Stack>
        </>
    );
};

export default AboutMe;