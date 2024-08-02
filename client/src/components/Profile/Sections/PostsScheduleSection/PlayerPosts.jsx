import React from 'react';
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
    useDisclosure,
    Input,
    Textarea
} from '@chakra-ui/react';
// import Post from '';

export default function PlayerPosts() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
    return (
        <Flex direction='column' w={{base:'95%', md:'40%', lg:'40%'}} align='center' justify='center' bg='#2a3030' borderRadius={25} p={5}>
            <Heading size='md' color='#f5f5f5' mb={3}>Player Posts</Heading>
            {/* <Post /> */}
            {/* <Post /> */}
            {/* <Post /> */}
            <Flex justify='center' w='100%'>
                <Button onClick={onOpen} bg='#f5f5f5' w={{base:'95%', md:'70%', lg:'60%'}} mt={3} _hover={{ bg: '#c4c4c4' }}>Create A Post</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create A Post</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Heading size='sm'>Title</Heading>
                            <Input size='sm' placeholder='Title...' type='text' name='title' value={value} onChange={handleChange}/>
                            <Heading size='sm' pt={2}>Body</Heading>
                            <Textarea size='sm' placeholder='Write your post here...' />
                        </ModalBody>

                        <ModalFooter>
                            <Button bg='#2a3030' color='#f5f5f5' _hover={{ bg: '#646b6b' }} mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant='ghost' _hover={{ bg: '#c4c4c4' }}>Post</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
        </Flex>
    );
}