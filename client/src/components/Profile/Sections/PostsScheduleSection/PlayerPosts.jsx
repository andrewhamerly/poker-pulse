import {
    Flex,
    Heading,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
// import Post from '';

export default function PlayerPosts() {
    return (
        <Flex direction='column' w='40%' align='center' justify='center' bg='#2a3030' borderRadius={25} p={5}>
            <Heading size='md' color='#f5f5f5' mb={3}>Player Posts</Heading>
            {/* <Post /> */}
            {/* <Post /> */}
            {/* <Post /> */}
            <Flex justify='center' w='100%'>
                <Button bg='#f5f5f5' w='60%' mt={3} _hover={{ bg: '#c4c4c4' }}>Create A Post</Button>
            </Flex>
        </Flex>
    );
}