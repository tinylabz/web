import {
    Box,
    Button,
    Flex,
    FlexProps,
    HStack,
    VisuallyHidden,
    useDisclosure,
} from '@chakra-ui/react';

import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Submenu } from './Submenu';
import { ToggleButton } from './ToggleButton';
import { links } from './_data';

const MobileNavContext = (props: FlexProps) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <>
            <Flex
                align="center"
                justify="space-between"
                className="nav-content__mobile"
                {...props}
            >
                <Box flexBasis="6rem">
                    <ToggleButton isOpen={isOpen} onClick={onToggle} />
                </Box>
                <Box as="a" rel="home" mx="auto">
                    <Logo h="24px" iconColor="black.400" />
                </Box>
                <Box visibility={{ base: 'hidden', sm: 'visible' }}>
                    <Button as="a" colorScheme="blue">
                        Get Started
                    </Button>
                </Box>
            </Flex>
            <NavMenu animate={isOpen ? 'open' : 'closed'}>
                {links.map((link, idx) =>
                    link.children ? (
                        <Submenu.Mobile key={idx} link={link} />
                    ) : (
                        <NavLink.Mobile key={idx} href={link.href}>
                            {link.label}
                        </NavLink.Mobile>
                    )
                )}
                <Button colorScheme="blue" w="full" size="lg" mt="5">
                    Try for free
                </Button>
            </NavMenu>
        </>
    );
};

const DesktopNavContent = (props: FlexProps) => {
    return (
        <Flex
            className="nav-content__desktop"
            align="center"
            justify="space-between"
            {...props}
        >
            <Box as="a" href="#" rel="home">
                <VisuallyHidden>Envelope</VisuallyHidden>
                <Logo h="6" iconColor="black.500" />
            </Box>
            <HStack
                as="ul"
                id="nav__primary-menu"
                aria-label="Main Menu"
                listStyleType="none"
            >
                {links.map((link, idx) => (
                    <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
                        {link.children ? (
                            <Submenu.Desktop link={link} />
                        ) : (
                            <NavLink.Desktop href={link.href}>
                                {link.label}
                            </NavLink.Desktop>
                        )}
                    </Box>
                ))}
            </HStack>

            <Button
                as="a"
                href="#"
                size="lg"
                colorScheme="blue"
                px="8"
                fontWeight="bold"
                fontSize="md"
            >
                Contact us
            </Button>
        </Flex>
    );
};

export const NavContent = {
    Mobile: MobileNavContext,
    Desktop: DesktopNavContent,
};
