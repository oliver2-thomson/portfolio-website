import {Button, Stack} from "@chakra-ui/react";

interface Props {
    onSelectPage: (id: number) => void;
}

const NavBar = ({onSelectPage}: Props) => {
    const pageMap = [
        {key: 0, value: 0, text: 'About me'},
        {key: 1, value: 1, text: 'Projects'},
        {key: 2, value: 2, text: 'Skills'},
        {key: 3, value: 3, text: 'Experience'},
        {key: 4, value: 4, text: 'Contact me'},
    ];

    return (
        <>
            <Stack spacing={4} marginY={3}>
                {pageMap.map(page => (
                    <Button
                        key={page.key}
                        value={page.value}
                        onClick={() => onSelectPage(page.value)}
                    >{page.text}</Button>
                ))}
            </Stack>
        </>
    );
};

export default NavBar;