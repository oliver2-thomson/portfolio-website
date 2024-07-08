import {HStack, IconButton} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";

const LinkBar = () => {
    const linkMap = [
        {label: 'Github', icon: <FaGithub/>, link: 'https://github.com/oliver2-thomson'}
    ];

    return (
        <>
            <HStack>
                {linkMap.map((link) => (
                    <a
                        href={link.link}
                        target="_blank"
                    >
                        <IconButton
                            aria-label={link.label}
                            icon={link.icon}
                            variant="ghost"
                        />
                    </a>
                ))}
            </HStack>
        </>
    );
};

export default LinkBar;