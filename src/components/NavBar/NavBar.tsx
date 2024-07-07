import {Button, HStack} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <>
            <HStack justifyContent="space-around" marginY={3}>
                <Button>About Me</Button>
                <Button>Projects</Button>
                <Button>Skills</Button>
                <Button>Experience</Button>
                <Button>Contact Me</Button>
            </HStack>
        </>
    );
};

export default NavBar;