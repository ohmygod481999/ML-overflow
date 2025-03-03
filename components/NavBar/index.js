import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
} from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import faker from "faker/locale/en";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import SignInOptions from "./SignInOptions";
import LoginByUsername from "./LoginByUsername";

const isLoggedIn = false;
function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");
    const [activeScreen, setActiveScreen] = useState("login-username");

    const modalScreens = useMemo(
        () => ({
            options: <SignInOptions setActiveScreen={setActiveScreen} />,
            "login-username": (
                <LoginByUsername setActiveScreen={setActiveScreen} />
            ),
        }),
        []
    );

    return (
        <Box boxShadow="md" mb="5">
            <Flex
                height="20"
                mx={["22", "50", "70", "130"]}
                alignItems="center"
            >
                <Box flex="1">
                    <Link href="/">
                        <Image className="logo" src={logo} alt="Logo" width={162} height={25}/>
                    </Link>
                </Box>
                {isLoggedIn ? (
                    <Flex alignItems="center">
                        <Button
                            size="md"
                            height="40px"
                            border="2px"
                            borderColor="green.500"
                            color="green.500"
                            borderRadius="20"
                            mr="4"
                        >
                            Write
                        </Button>
                        <Image
                            className="round-image border-green"
                            src={faker.image.image()}
                            width={40}
                            height={40}
                        />
                    </Flex>
                ) : (
                    <Flex alignItems="center">
                        <Button
                            size="md"
                            height="40px"
                            color="white"
                            bg="black"
                            borderRadius="20"
                            onClick={onOpen}
                        >
                            Sign in
                        </Button>
                    </Flex>
                )}
            </Flex>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={isSmallerThan1280 ? "full" : "xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody p="50">{modalScreens[activeScreen]}</ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default NavBar;
