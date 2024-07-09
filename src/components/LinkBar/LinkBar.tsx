import {HStack, IconButton} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const LinkBar = () => {
    const linkMap = [
        {label: 'Github', icon: <FaGithub/>, link: 'https://github.com/oliver2-thomson'},
        {label: 'Linkedin', icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/oliver-thomson-272881309'}
    ];

    return (
        <>
            <HStack>
                {linkMap.map((link) => (
                    <a
                        key={link.label}
                        href={link.link}
                        target="_blank"
                    >
                        <IconButton
                            aria-label={link.label}
                            icon={link.icon}
                            variant="ghost"
                            fontSize="30px"
                            size="lg"
                        />
                    </a>
                ))}
            </HStack>
        </>
    );
};

export default LinkBar;